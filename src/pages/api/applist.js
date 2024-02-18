import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:admin123@cluster0.glemluw.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const mongo = new MongoClient(uri, options);

export default async function handler(req, res) {
   if (req.method === "GET") {
    const code = req.query.code

    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    const data = await db
      .collection("applist")
      .findOne({ secretCode: code });

    await mongo.close(); // Closing Mongo
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Failed" });
    }
  }
}