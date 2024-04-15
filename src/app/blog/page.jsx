import Postcard from "@/components/postcard/postcard"
import styles from "./blog.module.css"

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
}

const BlogPage = async () => {

    const posts = await getData()

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
