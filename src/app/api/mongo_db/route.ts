import {StarsCollection } from "@/utils/interfaces";
import type { Collection, Db } from "mongodb";
import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from 'uuid';


async function init(): Promise<[Collection<StarsCollection>, () => void]> {
    const mongoClient: MongoClient = new MongoClient(process.env.MONGO_DB_URL);
    await mongoClient.connect();
    const database: Db = mongoClient.db("star-ai");
    const starsCollection: Collection<StarsCollection> = database.collection("stars");
    return [starsCollection, (): void => void mongoClient.close()];
}

export async function GET(req: Request): Promise<NextResponse> {
    const [starsCollection, close] = await init();
    const star = await starsCollection.findOne({ star_id: new URL(req.url).searchParams.get("star")  });
    close();
    if (star){
        return NextResponse.json(star, { status: 200 });
    }
    return new NextResponse("Star not found", { status: 404 });
}

export async function POST(req:NextRequest, res: NextResponse) {
    const body = await req.json();
    const { name, links, context, profileUrl } = body;

    const star_id = uuid();
    const newstar = {
      starId: star_id,
      name,
      links,
      context,
      profileUrl
    };

    try {
        const [starsCollection, close] = await init();
        console.log("trying to insert a newstar", newstar);
        await starsCollection.insertOne(newstar);
        close();
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(star_id, { status: 200 });  
}
