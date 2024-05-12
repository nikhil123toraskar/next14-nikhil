import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  return <div className={styles.container}>
    
    <div className={styles.textArea}>

      <h1 className={styles.title}>Creative Thoughts Agency.</h1>

      <p className={styles.desc} >
       Igniting Imagination, Crafting Connections Your Creativity Partner
Where Ideas Soar and Brands Flourish Unleashing Creativity space
      </p>

      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>

      <div className={styles.brands}>
        <Image src="/brands.png" fill className={styles.imgBrand} alt=""></Image>
      </div>

    </div>
    <div className={styles.imgArea}>
    <Image src="/hero.gif"fill className={styles.imgHero} alt=""></Image>
    </div>
    
    
    </div>;
};

export default Home;