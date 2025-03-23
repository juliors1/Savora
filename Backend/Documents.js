import { MongoClient } from "mongodb";

//Connect to the database first.
//const uri = Connection String

const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("SavoraDatabase");
    const collections = database.collection("SavoraUsers");
    //As of 3/22/2025, there are 2 collections, SavoraUsers and SavoraRecipe.
    //If you want use a specific collection, put the name of the collection
    //as a string into the database.collection() method.

    const doc = { Username: "MichaelDu" };
    const newValue = {
      $set: {
        Birthday: "06-18-2003"}
      },
    };
    
    collections.updateOne(doc, newValue, function(err, res) {
      if (err) throw err;
      console.log("Updated document!");
    });
    //This is how you update a value of an existing document in the database.

    const item = await collections.findOne(doc);
    console.log(item.Recipes);
    //This is how you find a document and access the fields
    //such as the Recipes fields that a user may have.

    const newDoc = {
      Username: "NewUsername",
      Password: "123",
      Recipes: null,
      Birthday: "01-01-2004"
    }

    collections.insertOne(newDoc);
    //This is how you add a new document into the database.
  
  } finally {
    // Close the connection after the operation completes
    await client.close();
  }
}
// Run the program and print any thrown errors
run().catch(console.dir);
