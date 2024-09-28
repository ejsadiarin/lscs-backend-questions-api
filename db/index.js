import mongoose from "mongoose";

const initDBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to MongoDB.");
    } catch (error) {
        console.error("Error occured when initializing DB connection.", error);
        throw error;
    }
};

export default initDBConnection;
