import Postcard from "@/components/postcard/postcard"
import styles from "./blog.module.css"
//import { getPosts } from "@/lib/data"

const getData = async () => {
    console.log('-----------------------------------------------------------'); 
    console.log(process.env.BASE_URL);
    const res = await fetch(`${process.env.BASE_URL}/api/blog`, {next:{revalidate:3600}});

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
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
