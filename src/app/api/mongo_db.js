import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, links, context } = req.body;

    const newstar = {
      email,
      name,
      links,
      context
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://lilyliao48:qGm7psKTRMgvzmv3@cluster0.aevage3.mongodb.net/?retryWrites=true&w=majority",
        { useUnifiedTopology: true }
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to DB" });
      return;
    }

    const db = client.db('Cluster0');

    try {
      const result = await db.collection("star-ai").insertOne(newstar);
      newstar.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing star failed" });
      return;
    }

    client.close();
    res.status(201).json({ message: "success", message: newstar });
  }
}

export default handler;