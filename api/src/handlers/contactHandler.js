const { Email, User } = require('../database/db');
const { Op } = require('sequelize');


const contactHandlerGet = async (req, res) => {
    try {
        // Get all emails from the database
        const emails = await Email.findAll({
            include: [{ model: User, as: 'userEmail', attributes: ['id', 'nickname', 'email'] }] // Specify the alias in the include option
        });
        
        res.status(200).json(emails);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const contactHandlerPost = async (req, res) => {
    try {
        // destructure the req.body
        const {name, lastname, email, message} = req.body;
        console.log(req.user)
        //save in db
        const newEmail = await Email.create({
            name,
            lastname,
            email,
            message,
            user: req.user?.id  // assumes user is logged or not
        });
        
        res.status(200).json({msg: 'Email sent succesfully!', email: newEmail});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const contactHandlerPut = async (req, res) => {
    try {
        const id = req.params.id;
        const {password, google, email, ...rest} = req.body;

        // TODO validate vs db
        if ( password ) {
            const salt = bcryptjs.genSaltSync(); // 10 rounds by default - bcryptjs method
            rest.password = bcryptjs.hashSync( password, salt ); // bcryptjs method to encrypt
        }

        const updatedUser = await User.update(rest, {
            where: { id },
            returning: true,
            plain: true
        });

        res.status(200).json({updatedUser})
    } catch (error) {
        res.status(500).json({msg: 'internal server error'});
    }
    
};

const contactHandlerDelete = async (req, res) => {
    try {
        const { id } = req.params;
        
        // code to delete permanently not recommended, we need to see who modifies db
        //const deletedUser = await User.destroy({where: {id: id}})
        
        // we better disable the user by changing the status to false and not showing it in get route
        const disableUser = await User.update({ status: false }, { where: { id: id },
            returning: true,
            plain: true
        });

        const authUser = req.user; // check auth

        res.status(200).json({disableUser, authUser}) // check auth delete later
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = {
    contactHandlerGet,
    contactHandlerPost,
    contactHandlerPut,
    contactHandlerDelete
}