const express = require("express");
const clientSchema = require("../models/client");

const router = express.Router();

// create user
router.post("/clients", (req, res) => {
   const client = clientSchema(req.body);
   client
      .save()
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
});

// get all users
router.get("/clients", (req, res) => {
   clientSchema
      .find()
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
});

// get user by id
router.get("/clients/:id", (req, res) => {
   const { id } = req.params;
   clientSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
});

// update user by id
router.put("/clients/:id", (req, res) => {
   const { id } = req.params;
   const { name, phone, city, street, number, state, birthdate } = req.body;
   clientSchema
      .updateOne(
         { _id: id },
         { $set: { name, phone, city, street, number, state, birthdate } }
      )
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
});

// delete user by id
router.delete("/clients/:id", (req, res) => {
   const { id } = req.params;
   clientSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
});

module.exports = router;
