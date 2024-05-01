import Image from "next/image"
import styles from "./about.module.css"


export const metadata = {
    title: 'About Page',
    description: 'Next.js starter app',
  }


const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textArea}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>
                    We create ideas that are bigger, bolder, braver and better.
                </h1>
                <p className={styles.desc}>
                    We create digital ideas that are bigger, braver, bolder and better.
                    We believe in good ideas, flexibility and precision.
                    We're world's our special team best consulting &  finance solution provider.
                    Wide range of web and software development services.</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10k</h1>
                        <p>Years of Experience</p>
                    </div>

                    <div className={styles.box}>
                        <h1>10k</h1>
                        <p>Years of Experience</p>
                    </div>

                    <div className={styles.box}>
                        <h1>10k</h1>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgArea}>
                <Image className={styles.imgContain}
                src="/about.png" alt="about image" fill>

                </Image>
            </div>

        </div>
    )
}
export default AboutPage
