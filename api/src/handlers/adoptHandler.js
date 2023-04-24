const { Adopt, User, Pet } = require('../database/db');
const { Op } = require('sequelize');


const adoptHandlerGet = async (req, res) => {
    try {
        const { limit = 20, from = 0, name } = req.query;
        const { id } = req.params;

        let whereClause = {};

        if (id) {
            whereClause = { id };
        } else if (name) {
            whereClause = {
                name: { [Op.iLike]: `%${name}%` }
            };
        }

        const [totalRecords, adoptions] = await Promise.all([
            Adopt.count({ where: whereClause }),
            Adopt.findAll({
                where: whereClause,
                limit: Number.parseInt(limit, 10),
                offset: Number.parseInt(from, 10),
                include: [
                    { 
                        model: User, 
                        attributes: ['id', 'nickname', 'email'] 
                    },
                    {
                        model: Pet,
                        attributes: ['id', 'name', 'specie'] 
                    }
                ]
            })
        ]);

        res.status(200).json({ totalRecords, adoptions });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const adoptHandlerPost = async (req, res) => {
    try {
      // destructure the req.body
      const {
        name,
        email,
        address,
        postalCode,
        age,
        facebook,
        instagram,
        acceptAgreement,
        status,
        petId
      } = req.body;

      const adoptionDb = await Adopt.findOne({where: {name: name}})

    if(adoptionDb){
        return res.status(400).json({
            msg: `Adoption ${adoptionDb.name} already exists.`
        })
    }

    console.log(req)
  
      //save in db
      const newAdoption = await Adopt.create({
        name,
        email,
        address,
        postalCode,
        age,
        facebook,
        instagram,
        acceptAgreement,
        status,
        userId: req.user.id,
        petId: petId
      });
  
      res
        .status(200)
        .json({ msg: 'Adoption created succesfully!', adoption: newAdoption });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

const adoptHandlerPut = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, address, postalCode, age, status, facebook, instagram, acceptAgreement, petId } = req.body;

    // TODO validate vs db
        const updatedAdoption = await Adopt.update(
             { name, email, address, postalCode, age, status, facebook, instagram, acceptAgreement, petId },
             { where: { id }, returning: true, plain: true }
        );

        res.status(200).json({updatedAdoption})
    } catch (error) {
        res.status(500).json({msg: 'internal server error'});
    }
    
};

const adoptHandlerDelete = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Check if record exists
        const adoption = await Adopt.findOne({ where: { id } });
        if (!adoption) {
            return res.status(404).json({
                errors: [{
                    value: id,
                    msg: `The ID: ${id} does not exist.`,
                    param: 'id',
                    location: 'params'
                }]
            });
        }
        
        // Disable the adoption by changing the status to false
        const disableAdoption = await Adopt.update(
            { status: false },
            {
                where: { id },
                returning: true,
                plain: true
            }
        );

        const authUser = req.user; // check auth

        res.status(200).json({ disableAdoption, authUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    adoptHandlerGet,
    adoptHandlerPost,
    adoptHandlerPut,
    adoptHandlerDelete
}