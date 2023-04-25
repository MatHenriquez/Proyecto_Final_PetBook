const { Router } = require('express');
const { adoptHandlerGet, adoptHandlerPost, adoptHandlerPut, adoptHandlerDelete } = require('../handlers/adoptHandler');
const { check } = require('express-validator');
const { validateAttributes } = require('../middlewares/validateAttributes');
const { isRoleValid, isEmailValid, userByIdExists, adoptionByIdExists } = require('../helpers/dbValidators');
const { validateJWT } = require('../middlewares/validateJWT');
const { isAdminRole, isRole } = require('../middlewares/validateRoles');


const adoptRoutes = Router();

adoptRoutes.get('/', adoptHandlerGet );

adoptRoutes.get('/:id', adoptHandlerGet );

adoptRoutes.post('/', [
    validateJWT,
    check('name','Name is required').not().isEmpty(),
    //check('lastname','Last Name is required').not().isEmpty(),
    //check('email', 'Email not valid').isEmail(),
    //check('email').custom(isEmailValid), // validate email
    //check('role', 'role not valid').isIn(['admin_role','user_role']),
    //check('role').custom(isRoleValid), // validate role
    validateAttributes  // middleware that validates attributes before passing to the handler
],adoptHandlerPost );

adoptRoutes.put('/:id', [
    check('id', 'Not a valid ID').isUUID(),
    //check('id').custom( userByIdExists ),
    check('role').custom(isRoleValid), // validate role
    validateAttributes
], adoptHandlerPut );

adoptRoutes.delete('/:id', [
    validateJWT,
    isAdminRole,
    //isRole('admin_role','user_role'),
    check('id', 'Not a valid ID').isUUID(),
    check('id').custom( adoptionByIdExists ),
    validateAttributes
], adoptHandlerDelete );

module.exports = adoptRoutes;