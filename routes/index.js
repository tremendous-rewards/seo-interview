const _ = require('lodash');
const express = require('express');
const router = express.Router();
const fs = require("fs");

const companies = JSON.parse(fs.readFileSync("./lib/companies.json"));

router.post('/companies', function(req, res, next) {
	const name = req.body.name;
  res.json({});
});

router.get('/companies', function(req, res, next) {
  res.json({
  	companies: _.shuffle(companies)
  });
});


module.exports = router;
