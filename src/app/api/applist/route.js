import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:admin123@cluster0.glemluw.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let mongo = new MongoClient(uri, options);

export async function GET(req) {
  const url = new URL(req.url);
  const query = new URLSearchParams(url.search);
  // const code = query.get("code");

  const code ='bwluxv'
  try {
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    const result = await db.collection("applist").findOne({
      secretCode: code,
    });
    await mongo.close();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: "failed" });
  }
}
