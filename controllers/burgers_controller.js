var express = require("express")
var burger = require("../models/burger")

var router = express.Router()

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  module.exports = router