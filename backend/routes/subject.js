const express = require('express');
const router = express.Router();

const Subject = {"contactSubject":["Software Developer","System Administrator","Data Analyst","Cybersecurity Specialist","Cloud Engineer","UX/UI Designer","Other","Fiad"]};

router.get('/',(req, res) => {
  res.json(Subject_file);
});


module.exports = router
