// init connections to mysql db
import mongoose from "mongoose";

export const initDBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
  } catch (error) {
    console.error("Error occured when initializing DB connection.", error);
    throw error;
  }
};
