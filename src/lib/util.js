import mongoose from "mongoose";
//const {default: mongoose} = require("mongoose");


const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("using exiting connection");
            return;
        }
        const db = await mongoose.connect("mongodb+srv://nikhil123toraskar:Nikhil123@nikhilcluster.ztqcjr3.mongodb.net/next14nikhil?retryWrites=true&w=majority&appName=nikhilCluster");
        debugger;
        console.log("connected to db");
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}