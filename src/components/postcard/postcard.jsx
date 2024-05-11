import Link from "next/link"
import styles from "./postcard.module.css"
import Image from "next/image"

const Postcard = ({post}) => {
    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src={post.img} fill alt="" className={styles.img}></Image>
                </div>
                <span className={styles.date}>{post?.createdAt?.toString().slice(0,10)}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post?.title}</h1>
                <p className={styles.desc}>{post?.desc?.slice(0,200)}...</p>
                <Link className={styles.link} href={`/blog/${post?.slug}`}>Read More</Link>
            </div>

        </div>
    )
}
export default Postcard
