const { User_pet, User, Pet } = require("../database/db.js");

const uploadImage = require("../utils/cloudinary");


const postUserPetsController = async (idUser, idPet, history, image) => {
    try {
        if (!idUser || !idPet || !history || !image) throw new Error("information is missing");

        const userPet = await User_pet.findOne({
            where: {
                userId: idUser,
                petId: idPet

            }
        });

        if (!userPet) throw new Error(`No relationship was found between idUser: ${idUser} and idPet: ${idPet}`);

        const imageC = await uploadImage(image);
        await userPet.update({
            history: history,
            statusHistory: true,
            image: imageC
        })

        return "Updated story";
    } catch (error) {

        return { error: error };
    }
}

const postAdoptUserPetsController = async (idUser, idPet) => {
    try {

        const user = await User.findByPk(idUser);
        const pet = await Pet.findByPk(idPet);
        const findPet = await User_pet.findOne({ where: { petId: idPet } });

        if (!user || !pet) throw new Error("There is no user or pet");
        if (findPet) throw new Error("You can't adopt this pet");

        await user.addPet(pet);


        return "successful adoption"
    } catch (error) {
        return { error: error }
    }
}



module.exports = { postUserPetsController, postAdoptUserPetsController };