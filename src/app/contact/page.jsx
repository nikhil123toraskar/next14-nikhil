import styles from "./page.module.css"
import Image from "next/image"

export const metadata = {
    title: 'Contact Page',
    description: 'Next.js starter app',
  }

const ContactPage = () => {
    return (
        <div className={styles.container}>

            <div className={styles.imgArea}>
                <Image src="/contact.png" fill alt="" className={styles.img}></Image>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Phone number (Optional)"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button className={styles.button}>Send</button>
                </form>
            </div>

        </div>
    )
}
export default ContactPage
