const mongoose = require("mongoose");

const conn = async () =>{
    const URL = `mongodb+srv://ExpoBird:VYbvO09FugGoJyvz@portfolio.cvadxo0.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL);
        console.log("database connected successfully");
        
    } catch (error) {
        console.log("error while connected database" , error);
    };
};

module.exports = conn;