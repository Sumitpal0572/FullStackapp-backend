const mongoose = require("mongoose");
const MongoURI = "mongodb://localhost:27017/fullstackbackend"

const connect = async () => {
    try {
        await mongoose.connect(MongoURI);
        console.log("MongoDb Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;