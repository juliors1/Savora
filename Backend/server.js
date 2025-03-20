const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
const PORT = 3000
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

app.use(cors())

app.use(express.json())

app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`Server is running on port ${PORT}`)
})