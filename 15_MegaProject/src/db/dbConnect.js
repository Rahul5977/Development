import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected");
  } catch (error) {
    console.log("MongoDb connection failed,", error);
    process.exit(1); //connect ni hua to code exit krdo
  }
};
export default connectDB
