import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_HOSPITAL"
    }).then(() => {
        console.log("Connected to database!")
    }).catch(err => {
        console.log(`Error Occured in connection of database: ${err}`);
    })
}