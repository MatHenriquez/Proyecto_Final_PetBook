const { Pet } = require('../database/db');

async function loadPets(){
    try {
        const count = await Pet.count();
        if(count === 0){
            await Pet.create(
                {
                    "name": "Mittens",
                    "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/Siames_hi7pp7.avif",
                    "adopted": "true",
                    "size": "Large",
                    "weight": 4,
                    "age": 3,
                    "gender": "Female",
                    "specie": "Cat"
                }
            );

            await Pet.create(
                {
                    "name": "Buddy",
                    "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/Golden_yzsyut.avif",
                    "adopted": "false",
                    "size": "Medium",
                    "weight": 30,
                    "age": 2,
                    "gender": "Male",
                    "specie": "Dog"
                });

            await Pet.create(
                {
                "name": "Thumper",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/Rabbit_cokzf7.avif",
                "adopted": "true",
                "size": "Medium",
                "weight": 2,
                "age": 6,
                "gender": "Male",
                "specie": "Rabbit"
            });

                await Pet.create(
                {"name": "Luna",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/RussianBlue_abh5ra.avif",
                "adopted": "false",
                "size": "Large",
                "weight": 5,
                "age": 8,
                "gender": "Female",
                "specie": "Cat"})

                await Pet.create(
                {"name": "Bailey",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/Labrador_hflfet.avif",
                "adopted": "false",
                "size": "Small",
                "weight": 10,
                "age": 2,
                "gender": "Male",
                "specie": "Dog"})

                await Pet.create(
                {"name": "Bugs",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417451/Animals_PF/Cobayo_uc24nn.avif",
                "adopted": "true",
                "size": "Small",
                "weight": 1,
                "age": 2,
                "gender": "Male",
                "specie": "Guinea Pig"})

                await Pet.create(
                {"name": "Simba",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417451/Animals_PF/Maine_fv0sqo.avif",
                "adopted": "false",
                "size": "Large",
                "weight": 8,
                "age": 10,
                "gender": "Male",
                "specie": "Cat"})

                await Pet.create(
                {"name": "Maxime",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/German_wmbdjq.avif",
                "adopted": "true",
                "size": "Large",
                "weight": 45,
                "age": 6,
                "gender": "Female",
                "specie": "Dog"})

                await Pet.create(
                {"name": "Kiwi",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417451/Animals_PF/Parrot_icsjhf.avif",
                "adopted": "false",
                "size": "Small",
                "weight": 1,
                "age": 15,
                "gender": "Female",
                "specie": "Parrot"
                }
            )
            
            await Pet.create(
                {"name": "Max",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682119918/n4sjbzvj5uqkkrtrkwya.jpg",
                "adopted": "false",
                "size": "Medium",
                "weight": 8,
                "age": 9,
                "gender": "Male",
                "specie": "Dog"
                }
            )
            
            await Pet.create(
                {"name": "Luna",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682120158/j8ew0kobqfbl8yytlqpy.jpg",
                "adopted": "false",
                "size": "Medium",
                "weight": 18,
                "age": 7,
                "gender": "Female",
                "specie": "Dog"
                }
            )
            
            await Pet.create(
                {"name": "Rocky",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682120296/ml3hpbg26s4tugdfigfu.jpg",
                "adopted": "false",
                "size": "Medium",
                "weight": 10,
                "age": 10,
                "gender": "Male",
                "specie": "Dog"
                }
            )
            
            await Pet.create(
                {"name": "Bella",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682308216/nlnbwkpyrmrwttbtfnqg.webp",
                "adopted": "false",
                "size": "Small",
                "weight": 5,
                "age": 1,
                "gender": "Female",
                "specie": "Dog"
                }
            )
            
            await Pet.create(
                {"name": "Daisy",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682120666/qtypubj09h3bramu6sxb.jpg",
                "adopted": "false",
                "size": "Medium",
                "weight": 15,
                "age": 6,
                "gender": "Female",
                "specie": "Dog"
                }
            )
            
            await Pet.create(
                {"name": "Ace",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682122333/bbfm5nxgnj03gxr4qxsi.jpg",
                "adopted": "false",
                "size": "Small",
                "weight": 8,
                "age": 7,
                "gender": "Male",
                "specie": "Dog"
                }
            )
            
            await Pet.create(
                {"name": "Charlie",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682120891/e4stnhtz0pjx0clhikjf.webp",
                "adopted": "false",
                "size": "Small",
                "weight": 5,
                "age": 1,
                "gender": "Male",
                "specie": "Dog"
                }
            )
            
            await Pet.create(
                {"name": "Lola",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682121037/myjqeqosc9ezoiyo8qz2.jpg",
                "adopted": "false",
                "size": "Small",
                "weight": 6,
                "age": 3,
                "gender": "Female",
                "specie": "Cat"
                }
            )
            
            await Pet.create(
                {"name": "Sadie",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682121175/ixp3o9pb40l0x67mfrrr.jpg",
                "adopted": "false",
                "size": "Small",
                "weight": 7,
                "age": 4,
                "gender": "Female",
                "specie": "Cat"
                }
            )
            
            await Pet.create(
                {"name": "Ziggy",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682121337/t170itdcaap2izjoa8y3.webp",
                "adopted": "true",
                "size": "Small",
                "weight": 9,
                "age": 6,
                "gender": "Male",
                "specie": "Cat"
                }
            )
            
            await Pet.create(
                {"name": "Sophie",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682121434/yhma76nwhbncnfa7lmch.jpg",
                "adopted": "true",
                "size": "Small",
                "weight": 6,
                "age": 8,
                "gender": "Female",
                "specie": "Cat"
                }
            )
            
            await Pet.create(
                {"name": "Tucker",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682121598/r6xyjn31mt0p8hcl6lyh.webp",
                "adopted": "false",
                "size": "Small",
                "weight": 1,
                "age": 4,
                "gender": "Male",
                "specie": "Parrot"
                }
            )
            
            await Pet.create(
                {"name": "Kiki",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682121697/ffreuqb6xlmj6rxzigzm.jpg",
                "adopted": "false",
                "size": "Small",
                "weight": 1,
                "age": 2,
                "gender": "Female",
                "specie": "Parrot"
                }
            )
            
            await Pet.create(
                {"name": "Odin",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682121909/kkywxeih2slctg0f7qoa.jpg",
                "adopted": "false",
                "size": "Small",
                "weight": 1,
                "age": 4,
                "gender": "Male",
                "specie": "Parrot"
                }
            )
            
            await Pet.create(
                {"name": "Bandit",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682122461/l5ninmyhueeowhs52ocu.jpg",
                "adopted": "false",
                "size": "Small",
                "weight": 2,
                "age": 2,
                "gender": "Male",
                "specie": "Rabbit"
                }
            )
            
            await Pet.create(
                {"name": "Rusty",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682122833/czluepv5wwtodnk2kfwv.webp",
                "adopted": "true",
                "size": "Small",
                "weight": 3,
                "age": 3,
                "gender": "Male",
                "specie": "Rabbit"
                }
            )
            
            await Pet.create(
                {"name": "Maggie",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682308380/kviph6orzzpipsrdtxd0.jpg",
                "adopted": "false",
                "size": "Medium",
                "weight": 19,
                "age": 8,
                "gender": "Female",
                "specie": "Dog"
                }
            )
            
            await Pet.create(
                {"name": "Ruby",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682308626/mypnbvgw1zpspbfsul4h.png",
                "adopted": "false",
                "size": "Small",
                "weight": 5,
                "age": 8,
                "gender": "Female",
                "specie": "Cat"
                }
            )
            
            await Pet.create(
                {"name": "Tyson",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682308831/yejabnx4whfc06logq5p.jpg",
                "adopted": "false",
                "size": "Medium",
                "weight": 10,
                "age": 7,
                "gender": "Male",
                "specie": "Dog"
                }
            )
            
            await Pet.create(
                {"name": "Finn",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682308991/dp7tc9rlhabxbhw33xag.jpg",
                "adopted": "false",
                "size": "Medium",
                "weight": 10,
                "age": 7,
                "gender": "Male",
                "specie": "Cat"
                }
            )
            
            await Pet.create(
                {"name": "Murphy",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682309085/garneppwwnj4alhfcbg3.jpg",
                "adopted": "false",
                "size": "Small",
                "weight": 5,
                "age": 3,
                "gender": "Male",
                "specie": "Cat"
                }
            )
            
            await Pet.create(
                {"name": "Chloe",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682309347/uegyrat8peustdnmyrpx.jpg",
                "adopted": "false",
                "size": "Small",
                "weight": 1,
                "age": 2,
                "gender": "Female",
                "specie": "Parrot"
                }
            )
            
            await Pet.create(
                {"name": "Coco",
                "image": "https://res.cloudinary.com/dhj72mkbp/image/upload/v1682309347/uegyrat8peustdnmyrpx.jpg",
                "adopted": "false",
                "size": "Small",
                "weight": 1,
                "age": 2,
                "gender": "Female",
                "specie": "Parrot"
                }
            )
            
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = loadPets;