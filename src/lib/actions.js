import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./util";

export const addPost = async (formData) => {
    "use server";

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    console.log(title, desc, slug, userId);

try {
    connectToDb();
    const newPost = new Post({
        title,
        desc,
        slug,
        userId
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");

} catch (error) {
    console.log(error);
    return {error: "Something Went Wrong!"};
}

};

export const deletePost = async (formData) => {
    "use server";

    const { Id } = Object.fromEntries(formData);

    console.log(Id);

try {
    connectToDb();
    await Post.findByIdAndDelete(Id);
    console.log("deleted from db");
    revalidatePath("/blog");

} catch (error) {
    console.log(error);
    return {error: "Something Went Wrong!"};
}

};