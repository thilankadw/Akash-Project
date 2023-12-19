const Harvest = require("../models/harvestModel");

module.exports.AddSellReq = async (req,res) => {

    try {

        const { userId, contactNumber, address, quantity, cropName } = req.body;
        
        if(!(userId && address && quantity)) {
            return res
                .status(400)
                .json({ message: "Required feilds are missing.", success: false });
        }

        const product = await Harvest.create({ userId, contactNumber, address, quantity, cropName });
        
        if(!product) {
            return res
                .status(400)
                .json({ message: "Couldn't made the sell request..", success: false });
        }

        if(product) {
            res
            .status(201)
            .json({ message: "Your request added successfully.", success: true});
        }else {
            return res.status(500).json({ message: "An error occurred.", success: false });
        }    

    } catch (error) {

        console.error(error);
        return res.status(500).json({ message: "An error occurred.", success: false });

    }

};