import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Database connected to the server")
  );
  await mongoose.connect(`${process.env.DB_URI}/mern-auth`);
};

export default connectDB;
