import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectToDb();
        console.log("connected to db");
        const posts = await Post.find();
        console.log(posts);
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch")
    }
}