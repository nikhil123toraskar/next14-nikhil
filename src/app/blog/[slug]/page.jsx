

import Image from "next/image"
import styles from "./singlePage.module.css"
import PostUser from "@/components/postUser/postUser";
//import { Suspense } from "react";
import { getPost } from "@/lib/data";


const getData = async (slug) => {

    const res = await fetch(`${process.env.BASE_URL}/api/blog/${slug}`);
    debugger;
    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
}


export const generateMetadata = async ({params}) => {
    const {slug} = params;
    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.desc,
    };
};

const SinglePostPage = async ({params}) => {

    /* onst {slug}= params;
    debugger;*/
  
    const {slug} = params;

    const post = await getData(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={post.img}  alt="" fill className={styles.img}></Image>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}> {post.title}</h1>
                <div className={styles.detail}>
                    
              
                   <PostUser userId= {post.userId}/>
                    <div className={styles.detailText} >
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.desc}
                </div>
            </div>
        </div>
    )
}
export default SinglePostPage

