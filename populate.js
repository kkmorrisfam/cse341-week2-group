require('dotenv').config();

const db = require("./models")
const jsonData = require('./temples.json');

const importData = async () => {
    try {
        await db.mongoose.connect(db.url);
        console.log("Connected to MongoDB");
        await db.temples.deleteMany();  // start fresh
        console.log("delete any data in temples")
        await db.temples.create(jsonData);   //populate collection with data
        console.log(`${jsonData.length} temples inserted!`);
        //exit
        process.exit();

    } catch (error) {
        console.error("Error inserting data: ", error);
        process.exit(1);
    }
}

//Run the import function
importData();