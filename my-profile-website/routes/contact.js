const express = require("express");
const router = express.Router();
const contact = require("../models/contact");

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newContact = new contact({ name, email, message });
    await newContact.save();
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});
module.exports = router;