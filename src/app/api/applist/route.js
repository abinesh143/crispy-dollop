import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:admin123@cluster0.glemluw.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const mongo = new MongoClient(uri, options);

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const query = new URLSearchParams(url.search);
    const id = query.get("code");
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    const feedback = await db
      .collection("applist")
      .findOne({ secretCode: code });
    await mongo.close();
    return NextResponse.json(feedback);
  } catch (error) {
    return NextResponse.json({ message: "Failed" });
  }
}
