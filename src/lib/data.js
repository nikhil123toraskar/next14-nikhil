
/* const posts = [
    { id: 1, title: "Post 1", body: "this is some random description", userId: 1},
    { id: 2, title: "Post 2", body: "this is some random description", userId: 1},
    { id: 3, title: "Post 3", body: "this is some random description", userId: 2},
    { id: 4, title: "Post 4", body: "this is some random description", userId: 2},
];

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
]
 */

import { Post, User } from "./models";
import { connectToDb } from "./util";


export const getPosts = async () => {
    try {
        debugger;
        connectToDb();
        debugger;
        const posts = await Post.find();
        debugger;
        console.log(posts);
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
        const users = await User.findOne();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("failed to fetch the posts!");
    }

}