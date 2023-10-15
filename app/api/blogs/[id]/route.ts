import { deletePosts, getById, updatePosts } from "@/lib/data";
import { constants } from "buffer";
import { NextResponse } from "next/server";

// get a post by its ID
export const GET = async (req:Request) =>{
    try {
        const id = req.url.split("blogs/")[1];
        const post = getById(id);
        if (!post) {
        return NextResponse.json({message:"Error!"}, {status: 404});
    }
    return NextResponse.json({message:"Ok!", post}, {status: 200});
    } catch (error) {
        return NextResponse.json({message:"Error!", error}, {status: 500});
    }
    
    
};

// update a post by its ID
export const PUT = async (req:Request) =>{
    try {
        const { title , desc} = await req.json();
        const id = req.url.split("blogs/")[1];
        updatePosts(id, title,desc);
        return NextResponse.json({message:"Ok!"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message:"Error!", error}, {status: 500});
    }
    
};
// delete a post by its ID
export const DELETE = async (req:Request) =>{   
    try {
        const id = req.url.split("blogs/")[1];
        deletePosts(id);
        return NextResponse.json({message:"Ok!"}, {status: 200});
    } catch (error) {
        return NextResponse.json({message:"Error!", error}, {status: 500});
    }
};

