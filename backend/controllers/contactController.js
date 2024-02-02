const Contact = require('../models/contactModel');

module.exports.CreateContact = async (req,res) => {

    try {

        const { firstName, lastname, email, messagetext } = req.body;

        if(!(firstName || email || messagetext)){
            return res.json({ message: "Required information are missing.", success: false })
        }

        const contact = await Contact.create({ firstName, lastname, email, messagetext });

        if (!contact) {
            return res.status(400).json({ message: "Please try again.", success: false });
        }
    
        if(contact){
            res
            .status(201)
            .json({ message: "We will coontact you.", success: true});
        }

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "An error occurred.", success: false });

    }
}