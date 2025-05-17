const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { fname, lname, email, subject, message } = req.body;
    console.log("Content from summited", { fname, lname, email, subject, message });
    res.status(200).json({ status: 'DO TO NOW (Success Message Received)' });
});

module.exports = router;
