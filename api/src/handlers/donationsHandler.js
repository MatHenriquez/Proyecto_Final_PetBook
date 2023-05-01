const {getAllDonations} = require('../controllers/donationsController');

const getDonationsHandler = async (req, res) =>{
    const data = req.query;

    try {
        const response = await getAllDonations(data);
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getDonationsHandler,
}