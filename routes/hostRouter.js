const express = require("express");
const path = require("path");
const hostRouter = express.Router();
hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.method, req.url);
  res.render("add-home", { pageTitle: "Add Home" });
});
const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.method, req.url, req.body);
  console.log(
    "Home added:",
    req.body.houseName,
    req.body.address,
    req.body.price,
    req.body.rating,
    req.body.photoUrl
  );
  registeredHomes.push({
    houseName: req.body.houseName,
    address: req.body.address,
    price: req.body.price,
    rating: req.body.rating,
    photoUrl: req.body.photoUrl,
  });
  console.log("Registered Homes:", registeredHomes);
  res.render("sHome", { pageTitle: "Home added successfully" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
