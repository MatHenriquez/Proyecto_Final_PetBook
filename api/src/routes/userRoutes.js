const { Router } = require('express');
const { userHandlerGet, userHandlerPost, userHandlerPut, userHandlerDelete,userHandlerVerifyAdminRole } = require('../handlers/userHandler');
const { check } = require('express-validator');
const { validateAttributes } = require('../middlewares/validateAttributes');
const { isRoleValid, isEmailValid, userByIdExists } = require('../helpers/dbValidators');
const { validateJWT } = require('../middlewares/validateJWT');
const { isAdminRole, isRole } = require('../middlewares/validateRoles');


const userRoutes = Router();

userRoutes.get('/', userHandlerGet );

userRoutes.get('/:id', userHandlerGet );
userRoutes.get("/verifyAdminRole/:id",userHandlerVerifyAdminRole)

userRoutes.post('/', [
    check('nickname', 'nickname is required').not().isEmpty(),
    check('password', 'password >= 6 characters is required').isLength({min: 6}),
    //check('email', 'email not valid').isEmail(),
    check('email').custom(isEmailValid), // validate email
    //check('role', 'role not valid').isIn(['admin_role','user_role']),
    check('role').custom(isRoleValid), // validate role
    validateAttributes  // middleware that validates attributes before passing to the handler
],userHandlerPost );

userRoutes.put('/:id', [
    check('id', 'Not a valid ID').isUUID(),
    check('id').custom( userByIdExists ),
    check('role').custom(isRoleValid), // validate role
    validateAttributes
], userHandlerPut );

userRoutes.delete('/:id', [
    validateJWT,
    isAdminRole,
    //isRole('admin_role','user_role'),
    check('id', 'Not a valid ID').isUUID(),
    check('id').custom( userByIdExists ),
    validateAttributes
], userHandlerDelete );

module.exports = userRoutes;