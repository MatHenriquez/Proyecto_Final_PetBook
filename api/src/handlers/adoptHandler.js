const { Adopt, User, Pet } = require('../database/db');
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');

const adoptHandlerGet = async (req, res) => {
    try {
        const { limit = 20, from = 0, name } = req.query;
        const { id } = req.params;
//
        let whereClause = { status: "pending"};

        if (req.query.otherstatus) {
            if (req.query.otherstatus === "approved" || req.query.otherstatus === "declined") {
              whereClause = { status: req.query.otherstatus };
            } else {
              return res.status(400).json({ error: "Invalid otherstatus value" });
            }
          }
          
          if (id) {
            whereClause = { ...whereClause, id };
          } else if (name) {
            whereClause = {
              ...whereClause,
              name: { [Op.iLike]: `%${name}%` },
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

      //const adoptionDb = await Adopt.findOne({where: {name: name}})

    // if(adoptionDb){
    //     return res.status(400).json({
    //         msg: `Adoption ${adoptionDb.name} already exists.`
    //     })
    // }

        // Check if adoption with given petId already exists
        const adoptionWithPet = await Adopt.findOne({ where: { petId } });
        if (adoptionWithPet) {
          return res.status(400).json({
            msg: `Pet with id ${petId} is already adopted.`
          });
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

const adoptStatusHandlerApprovedPut = async (req, res) => {
    try {
        const id = req.params.id;
    
        // TODO validate vs db
        const updatedAdoption = await Adopt.update(
          { status: "approved" },
          { where: { id }, returning: true, plain: true }
        );
    
        // get the adoption data to get the adopter's email
        const adoption = updatedAdoption[1].dataValues;
         console.log(adoption)
        // send email to the adopter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "petbook5173@gmail.com",
            pass: process.env.PASSWORD // gmail app password
          }
        });
    
        const mailOptions = {
          from: "petbook5173@gmail.com",
          to: adoption.email,
          subject: "Petbook Adoption Approved",
          text: "Congratulations! Your adoption request has been approved. Please contact us for more information."
        };
    
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });

            // Update Pet model adopted attribute to true
        const petId = adoption.petId;
        const updatedPet = await Pet.update(
          { adopted: true },
          { where: { id: petId }, returning: true, plain: true }
        );
    
        res.status(200).json({ updatedAdoption, updatedPet });
      } catch (error) {
        res.status(500).json({ msg: "internal server error" });
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
            { status: "declined" },
            {
                where: { id },
                returning: true,
                plain: true
            }
        );

        // get the adoption data to get the adopter's email
        const adoptionData = disableAdoption[1].dataValues;
        
        // send email to the adopter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "petbook5173@gmail.com",
                pass: process.env.PASSWORD // gmail app password
            }
        });

        const mailOptions = {
            from: "petbook5173@gmail.com",
            to: adoptionData.email,
            subject: "Petbook Adoption Declined",
            text: "We're sorry to inform you that your adoption request has been declined. Please contact us for more information."
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

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
    adoptHandlerDelete,
    adoptStatusHandlerApprovedPut
}