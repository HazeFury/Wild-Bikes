import NavBar from "../../components/HomeComponents/NavBar/NavBar";
import WallPaper from "../../components/HomeComponents/WallPaper/WallPaper";
import PreviewListBikes from "../../components/HomeComponents/PreviewListBikes/PreviewListBikes";
import PreviewBrandList from "../../components/HomeComponents/PreviewBrandList/PreviewBrandList";
import PreviewBlog from "../../components/HomeComponents/PreviewBlog/PreviewBlog";
import Footer from "../../components/HomeComponents/Footer/Footer";
import styles from "./Home.module.css";
import "../../App.css";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <NavBar />
      <WallPaper />
      <h3 className={styles.home_h3}>Nos motos du moment</h3>
      <PreviewListBikes />
      <button type="button" className={styles.btn_to_page}>
        Voir plus
      </button>
      <h3 className={styles.home_h3}>Nos marques</h3>
      <PreviewBrandList />
      <button type="button" className={styles.btn_to_page}>
        Voir toutes nos marques
      </button>
      <h3 className={styles.home_h3}>À propos de nous</h3>
      <div className={styles.about_us_div}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          reprehenderit modi maiores, voluptate ducimus eum deleniti quos
          perspiciatis! Ullam atque placeat, doloremque quo animi magni iste
          asperiores aliquid non mollitia cum similique magnam, beatae aliquam
          est a quidem odit tenetur nulla voluptas dolor, provident rerum
          expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          excepturi in aperiam voluptates quo! Quisquam quam mollitia quae
          doloribus repellendus adipisci itaque corrupti eius odit veniam
          veritatis ipsum nam nulla atque, modi animi ex nesciunt reprehenderit
          eaque! Ipsum, iste ad.
        </p>
      </div>
      <button type="button" className={styles.btn_to_page}>
        Lire la suite
      </button>
      <h3 className={styles.home_h3}>Le blog moto</h3>
      <PreviewBlog />
      <button type="button" className={styles.btn_to_page}>
        Voir plus
      </button>
      <Footer />
    </div>
  );
}
