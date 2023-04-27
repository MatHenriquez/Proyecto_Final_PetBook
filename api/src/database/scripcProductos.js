const productos = [
    {
        "name": "Wellness",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 3.0130194395575067,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Wellness",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 2,
        "size": "10x10x10 cm",
        "specie": "Dog",
        "consumption_age": 1,
        "discount": false
    },
    {
        "name": "Taste of the Wild",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 0.9959140530813948,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Taste%20of%20the%20Wild",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 4,
        "size": "15x15x15 cm",
        "specie": "Dog",
        "consumption_age": 5,
        "discount": false
    },
    {
        "name": "Hill's Science Diet",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 24.15630854437807,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Hill's%20Science%20Diet",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 6,
        "size": "18x18x18 cm",
        "specie": "Dog",
        "consumption_age": 8,
        "discount": false
    },
    {
        "name": "Merrick",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 0.7952435174511339,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Merrick",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 2,
        "size": "10x10x10 cm",
        "specie": "Dog",
        "consumption_age": 1,
        "discount": false
    },
    {
        "name": "Canidae",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 20.971988943391878,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Canidae",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 4,
        "size": "15x15x15 cm",
        "specie": "Dog",
        "consumption_age": 5,
        "discount": false
    },
    {
        "name": "Nutro",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 36.81903209260769,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Nutro",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 6,
        "size": "18x18x18 cm",
        "specie": "Dog",
        "consumption_age": 8,
        "discount": false
    },
    {
        "name": "Royal Canin",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 22.625359342255695,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Royal%20Canin",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 2,
        "size": "10x10x10 cm",
        "specie": "Dog",
        "consumption_age": 1,
        "discount": false
    },
    {
        "name": "Purina Pro Plan",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 20.72448738048737,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Purina%20Pro%20Plan",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 4,
        "size": "15x15x15 cm",
        "specie": "Dog",
        "consumption_age": 5,
        "discount": false
    },
    {
        "name": "Eukanuba",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 20.568289645281357,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/eukanuba",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 6,
        "size": "18x18x18 cm",
        "specie": "Dog",
        "consumption_age": 8,
        "discount": false
    },
    {
        "name": "Blue Buffalo",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 17.993446512892223,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Blue%20Buffalo",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 2,
        "size": "10x10x10 cm",
        "specie": "Dog",
        "consumption_age": 1,
        "discount": false
    },
    {
        "name": "Iams",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 17.87940814548685,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Iams",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 4,
        "size": "15x15x15 cm",
        "specie": "Dog",
        "consumption_age": 5,
        "discount": false
    },
    {
        "name": "Pedigree",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 12.608785994824846,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Pedigree",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 6,
        "size": "18x18x18 cm",
        "specie": "Dog",
        "consumption_age": 8,
        "discount": false
    },
    {
        "name": "Acana",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 1.8831124470807934,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Acana",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 2,
        "size": "10x10x10 cm",
        "specie": "Dog",
        "consumption_age": 1,
        "discount": false
    },
    {
        "name": "Orijen",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 19.801872719450365,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Orijen",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 4,
        "size": "15x15x15 cm",
        "specie": "Dog",
        "consumption_age": 5,
        "discount": false
    },
    {
        "name": "Cesar",
        "userId": "2b8ee069-2537-4f83-ada7-ff82dc74adfb",
        "price": 15.55697868462006,
        "quantity": 20,
        "category": "50d26ee2-875b-4843-8821-8cd018b44361",
        "image": "http://res.cloudinary.com/dnva1a3wx/image/upload/v1/imagesProductosPerros/Cesar",
        "description": "Este alimento para perros proporciona nutrición completa y equilibrada.",
        "available": true,
        "weight": 6,
        "size": "18x18x18 cm",
        "specie": "Dog",
        "consumption_age": 8,
        "discount": false
    }
]