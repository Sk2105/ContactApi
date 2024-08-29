const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mydb";

const dbConnection = async () => {
    try {
        const conn =await mongoose.connect(url)
        console.log("Database connected", mongoose.connection.host);
        return conn;
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnection;