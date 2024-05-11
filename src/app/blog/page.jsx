import Postcard from "@/components/postcard/postcard"
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data";
//import { getPosts } from "@/lib/data"

const getData = async () => {
    const res = await getPosts();

    console.log(res);

    return res;
}


export const metadata = {
    title: 'All posts Page',
    description: 'Next.js starter app',
  }


const BlogPage = async () => {

   const posts = await getData();
   //const posts = await getPosts();

    return (
        <div className={styles.container}>
            {
                posts.map((post) => (
                    <div className={styles.postContainer} key={post.id} >
                        <Postcard post={post} /></div>
                ))}

        </div>
    )
}
export default BlogPage
