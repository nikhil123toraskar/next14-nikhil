"use client";

import Image from "next/image"
import styles from "./singlePage.module.css"

const SinglePostPage = () => {
    console.log('In the single post page');
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/single2.jpeg" fill className={styles.img}></Image>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title} Title></h1>
                <div className={styles.detail}>
                    <Image
                        className={styles.avatar}
                        src="/single3.png"
                        alt=""
                        width={50}
                        height={50}
                        >
                    </Image>
                    <div className={styles.detailText} >
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText} >
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolorum, consectetur nobis iusto libero nemo itaque 
                    exercitationem illum nihil nesciunt accusantium eveniet 
                    laborum temporibus necessitatibus dolorem quo animi quisquam 
                    aliquam aut?
                </div>
            </div>
        </div>
    )
}
export default SinglePostPage

