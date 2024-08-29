const asyncHandler = require("express-async-handler");
const dbConnection = require("../config/dbConnection");
const Contacts = require("../models/ContactModel");

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contacts.find();

  res.status(200).json({
    success: true,
    data: contacts,
  });
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).send("All fields are required");
  }
  const status = await Contacts.insertMany({ name, email, phone });
  res.status(201).json({message:"Contact created successfully"});
});

const updateContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send("All fields are required");
  }

  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    return res.status(400).send("Contact not found");
  }

  contact.name = name;
  contact.email = email;
  contact.phone = phone;
  const updatedContact = await contact.save();

  res.status(200).json({
    success: true,
    data: "Contact updated successfully",
  });

});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    return res.status(400).send("Contact not found");
  }

  const status = await contact.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    message: "Contact deleted successfully",
  });
});

const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    return res.status(400).send("Contact not found");
  }
  res.status(200).json(contact);
});
module.exports = {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContactById,
};
