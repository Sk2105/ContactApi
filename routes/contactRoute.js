const routes = require("express").Router();
const {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContactById,
} = require("../controller/contactController");

routes.route("/").get(getContact).post(createContact);
routes
  .route("/:id")
  .put(updateContact)
  .delete(deleteContact)
  .get(getContactById);

module.exports = routes;
