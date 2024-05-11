"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./util";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {


    const { title, desc, slug, userId, img } = Object.fromEntries(formData);


    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            img
        });

        await newPost.save();
        revalidatePath("/blog");
        revalidatePath("/admin");
        //return {success: "true"};

    } catch (error) {
        console.log(error);
        return { error: "Something Went Wrong!" };
    }

};

export const addUser = async (previousState, formData) => {


    const { username, email, password, img, isAdmin } = Object.fromEntries(formData);



    try {
        connectToDb();
        const newUser = new User({
            username, email, password, img, isAdmin
        });

        await newUser.save();
        revalidatePath("/blog");
        revalidatePath("/admin");
        //return {success: "true"};

    } catch (error) {
        console.log(error);
        return { error: "Something Went Wrong!" };
    }

};

export const deletePost = async (formData) => {


    const { id } = Object.fromEntries(formData);
    console.log(id);



    try {
        connectToDb();
        await Post.findByIdAndDelete(id);

        revalidatePath("/blog");
        revalidatePath("/admin");
        //return {success: "true"};

    } catch (error) {
        console.log(error);
        return { error: "Something Went Wrong!" };
    }


};

export const deleteUser = async (formData) => {


    const { id } = Object.fromEntries(formData);



    try {
        connectToDb();
        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);

        revalidatePath("/blog");
        revalidatePath("/admin");
        //return {success: "true"};

    } catch (error) {
        console.log(error);
        return { error: "Something Went Wrong!" };
    }


};

export const handleGitHubLogin = async () => {

    await signIn("github");
};

export const handleLogout = async () => {

    await signOut();
};

export const register = async (previousState, formData) => {
    const { username, email, img, password, passwordRepeat } = Object.fromEntries(formData);

    if (password != passwordRepeat) {
        return { error: "Passwords do not match!" };
    }

    try {
        connectToDb();

        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username Already Exists!" };
        }

        const emailId = await User.findOne({ email });
        if (emailId) {
            return { error: "Email Already Exists!" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        return { success: "true" };
    } catch (error) {
        console.log(error);
        return { error: "Something Went Wrong!" };
    }
}

export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);
        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid Username or Password!" };
        }
        throw err;
    }
}