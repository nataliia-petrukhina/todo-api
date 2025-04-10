import mongoose from "mongoose";

// diese Funktion verwendet mongoose.connect um eine Verbindung zur MongoDB herzustellen
const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
