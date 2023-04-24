const getPetByNameController = require("../controllers/getPetByNameController");
const getAllPetsController = require("../controllers/getAllPetsController");
const getPetsDetailController = require("../controllers/getPetsDetailController");
const postPetsController = require("../controllers/postPetsController");
const putPetsController = require("../controllers/putPetsController");
const deletePetController = require("../controllers/deletePetController");
const filterPetsController = require("../controllers/filterPetsController");

const allLogicPetsController = require("../controllers/allLogicPetsController");

const adoptionFormController = require('../controllers/adoptionFormController');
const uploadImage = require("../utils/cloudinary.js");



const handlerGetAllPets = async (req, res) => {
// const {name, specie, gender, size, weight, age, godFather,page=0,pageSize=4,sort,typeOrder } = req.query
const querys = req.query
const {page=0,pageSize=4} = req.query
// console.log({querys});
  try {
    // const allPets = await allLogicPetsController(name, specie, gender, size, weight, age, godFather,page,pageSize,sort,typeOrder);
    const allPets = await allLogicPetsController(querys,page,pageSize,querys);
    res.status(200).json(allPets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const handlerPets = async (req, res) => {
  let { name, page=0, size=4 } = req.query;
  try {
    const response = name
      ? await getPetByNameController(name,page,size)
      : await getAllPetsController(page,size);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPetsDetail = async (req, res) => {
  let { id } = req.params;

  try {
    const response = await getPetsDetailController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPetsPost = async (req, res) => {
  let {name,specie,size,weight,age,gender} = req.body;
  let image = await uploadImage(req.body.image)
  console.log(image);
  try {
    const response = await postPetsController(image,name,size,specie,weight,age,gender);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPetsPut = async (req, res) => {
  let {} = req.body;
  try {
    const response = await putPetsController();
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

const handlerPetsDelete = async (req, res) => {
  let { id } = req.params;
  try {
    const response = await deletePetController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleFilter = async (req, res) => {

  const filters = req.query;
  
  try {
    
    const response = await filterPetsController(filters);
    res.status(200).json(response);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const handlerAdoptionForm = async (req, res) => {
  const request = req.body;

  console.log(request)
  try {
    const response = await adoptionFormController(request);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  handlerGetAllPets,
  handlerPets,
  handlerPetsDetail,
  handlerPetsPost,
  handlerPetsPut,
  handlerPetsDelete,
  handleFilter,
  handlerAdoptionForm
};
