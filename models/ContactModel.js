const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    phone: {
      type: Number,
      required: [true, "Please add a phone number"],
    },
  },
  {
    timestamps: true,
  }
);

const Contacts = mongoose.model("Contacts", contactSchema);

module.exports = Contacts;
