const axios = require("axios");

class PaymentService {


  async createSubscription() {
    const url = "https://api.mercadopago.com/preapproval";

    const body = {
      reason: "Pet Sponsor",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 12,
        currency_id: "ARS"
      },
      back_url: "https://proyecto-final-pet-book-zgni.vercel.app/thanks",
      payer_email: "test_user_1437277876@testuser.com"
    };

    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PROD_ACCESS_TOKEN}`
      }
    });

    return subscription.data;
  }
}

module.exports = PaymentService;