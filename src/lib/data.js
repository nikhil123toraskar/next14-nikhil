import { Post, User } from "./models";
import { connectToDb } from "./util";


export const getPosts = async () => {
    try {
        debugger;
        connectToDb();
        debugger;
        const posts = await Post.find();
        debugger;

        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch the posts!");
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch the posts!");
    }
}

export const getUser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch the posts!");
    }

}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch the posts!");
    }

}