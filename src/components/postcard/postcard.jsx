import Link from "next/link"
import styles from "./postcard.module.css"
import Image from "next/image"

const Postcard = ({post}) => {
    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/post.jpeg" fill className={styles.img}></Image>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.id}`}>Read More</Link>
            </div>

        </div>
    )
}
export default Postcard
