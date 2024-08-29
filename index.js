const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const dbConnection = require("./config/dbConnection");
dbConnection()
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/contact", require("./routes/contactRoute"))
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})