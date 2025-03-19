require("dotenv").config({path: "./config.env"})


const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let database

module.exports = {
    connectToServer: () => {
        database = client.db("blogData")
    },
    getDB: () => {
        return database
    }
}