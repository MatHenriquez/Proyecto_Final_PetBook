const { User } = require('../db');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generateJWT');
const { googleVerify } = require('../helpers/googleVerify');


const authHandlerPost = async (req, res) => {
    try {
        const { email, password } = req.body;

        // verify if email exists
        const user = await User.findOne({where: {email: email}});
        if ( !user ) {
            return res.status(400).json({msg: 'Email not valid.'})
        }

        // verify if user is active
        if ( !user.status ) {
            return res.status(400).json({msg: 'user inactive'})
        }
        // verify password
        const validPassword = bcryptjs.compareSync( password, user.password);
        if ( !validPassword ) {
            return res.status(400).json({msg: 'invalid password'})
        }

        // generate json web token JWT
        const token = await generateJWT( user.id );


        res.json({
            user,
            token
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


const googleSignIn = async (req, res) => {
    const {id_token} = req.body;

    try {
        const {name, email, image} = await googleVerify(id_token);
        //console.log(googleUser)

        let user = await User.findOne({where: {email: email}})
        if ( !user ) {
            const data = {
                nickname: name,
                email,
                password: ':P',
                image,
                google: true
            };

            user = await User.create(data);
        }

        // verify if user is active
        if ( !user.status ) {
            return res.status(401).json({msg: 'user inactive, contact admin please'})
        }

         // generate json web token JWT
         const token = await generateJWT( user.id );

        res.json({
            msg: 'Ok',
            user,
            token
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }




}

module.exports = {
    authHandlerPost,
    googleSignIn
};