const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');
const Enquiry = require('../model/enquiryschema');


router.get('/', (req, res) => {

    res.send('hello from server side');

});

router.post('/register', async (req, res) => {
    const { name, phone } = req.body;

    if (!name || !phone) {
        return res.status(422).json({ error: 'please fill the field properly' });

    }



    try {

        const user = new User({ name, phone });
        const response = await user.save();
        if (response) {

            res.status(201).json({ message: 'user registered sucessfully' });

        }



    } catch (error) {
        console.log(error);

    }


});


router.post('/send', async (req, res) => {
    const { name, email, movefrom, moveto, phone } = req.body;

    if (!name || !email || !movefrom || !moveto || !phone) {
        return res.status(422).json({ error: 'please fill the field properly' });

    }



    try {

        const enquiry = new Enquiry({ name, email, movefrom, moveto, phone });
        const response = await enquiry.save();
        if (response) {

            res.status(201).json({ message: 'enquiry send sucessfully' });

        }



    } catch (error) {
        console.log(error);
        

    }


});

module.exports = router;