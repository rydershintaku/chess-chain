const mongoose = require('mongoose');
const dotenv = require("dotenv");
const appServer = require('./app');
dotenv.config();

// Replace with your actual MongoDB Atlas connection string
const atlasDbUrl = 'mongodb+srv://playvigfake:XX3y53Mk4RyT3hbv@cluster0.srrvvmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(atlasDbUrl).then(con => {
  console.log("Connected to MongoDB Atlas database successfully");
}).catch(err => {
  console.log("Error while connecting to MongoDB Atlas DB", err);
})

const port = process.env.PORT || 3001;
const server = appServer.listen(port, () => {
  console.log("Listening on port ",port);
});