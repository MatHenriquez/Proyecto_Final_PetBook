const jwt = require('jsonwebtoken');
const { User } = require('../db');

const validateJWT = async (req, res, next) => {
    const token = req.header('x-token');
    if ( !token ) {
        return res.status(401).json({
            msg: 'no token requested'
        })
    }
   // console.log(token);
   try {
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        
        // read the user that matches uid
        const user = await User.findByPk(uid);

        if ( !user ) {
            return res.status(401).json({
                msg: 'Invalid token, user does not exist in DB'
            })
        }

        // verify if user is active
        if ( !user.status ) {
            return res.status(401).json({
                msg: 'Invalid token, user is inactive'
            })
        }
        
        req.user = user;
        //console.log(payload);
        next();
   } catch (error) {
        res.status(401).json({
            error: error.message,
            msg: 'Invalid token'
        })
   }
    
}   

module.exports = {validateJWT};