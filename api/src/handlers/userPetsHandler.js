const {getPetsUserController, getHistoryUserPet, getacceptStories, getHistoryNotifications} = require("../controllers/getUserPetsController");
const { postUserPetsController, postAdoptUserPetsController, postShowController } = require("../controllers/postUserPetsController");

const handlergetUserpets = async (req, res) => {
    const { idUser } = req.query;
    try {
        const pets = await getPetsUserController(idUser);
        if(pets.error) throw new Error(pets.error);

        res.status(200).send(pets);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const handlerPostUserPets = async (req, res) => {
    const { idUser, idPet, history, image } = req.body;

    try {        
        const data = await postUserPetsController(idUser, idPet, history, image);
        if(data.error) throw new Error(data.error)

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const handlerPostAdopted = async (req, res) => {

    const { idUser, idPet } = req.body;
    
    console.log(idPet,idUser);

    try {
        const data = await postAdoptUserPetsController(idUser, idPet);
        if(data.error) throw new Error(data.error);

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const handlerGetShowHistory = async (req, res) => {
    try {
        const data = await getHistoryUserPet();

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
}

const hanldeGetacceptStories = async (req, res) => {
    try {
        const data = await getacceptStories();

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
}

const hanldePostShow = async (req, res) => {
    const {post, idUser, idPet} = req.body;
    
    try {
        const data = await postShowController(post, idUser, idPet);

        if(data.error) throw new Error(data.error);

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
}

const handleGetHistoryNotifications = async (req, res) => {
    try {
        const data = await getHistoryNotifications();

        if(data.error) throw new Error(data.error);

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    handlergetUserpets,
    handlerPostUserPets,
    handlerPostAdopted,
    handlerGetShowHistory,
    hanldeGetacceptStories,
    hanldePostShow,
    handleGetHistoryNotifications
}