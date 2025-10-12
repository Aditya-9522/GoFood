const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://GoFood:Aditya_9522@cluster0.7sb2pd2.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();

    if (data && catData) {
      global.food_items = data;
      global.foodCategory = catData;
    } else {
      console.log("No data found in collections.");
    }
  } catch (err) {
    console.log("---", err);
  }
};

module.exports = mongoDB;