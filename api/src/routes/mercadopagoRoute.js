const express = require('express');
const app = express();
require("dotenv").config();
const { PROD_ACCESS_TOKEN } = process.env;

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: PROD_ACCESS_TOKEN,
});

//Routes
app.get('/', (req, res) =>{
    // Crea un objeto de preferencia
    let preference = {
        items: [
        {
            title: "Mi producto",
            unit_price: 100,
            quantity: 1,
        },
        ],
    };
    
    mercadopago.preferences
        .create(preference)
        .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
        })
        .catch(function (error) {
        console.log(error);
        });
    })


  

module.exports = app;