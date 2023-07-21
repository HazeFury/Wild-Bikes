import { Link } from "react-router-dom";
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
      <Link className={styles.link_class} to="/motos">
        <button type="button" className={styles.btn_to_page}>
          Voir plus
        </button>
      </Link>
      <h3 className={styles.home_h3}>Nos marques</h3>
      <PreviewBrandList />
      <Link className={styles.link_class} to="/">
        <button type="button" className={styles.btn_to_page}>
          Voir toutes nos marques
        </button>
      </Link>
      <h3 className={styles.home_h3}>À propos de nous</h3>
      <div className={styles.about_us_div}>
        <p>
          Bienvenue chez Wild Bikes, la passion à deux roues depuis 2014 !
          Fondée par Jean Pierre Herlant, un passionné de moto depuis son plus
          jeune âge, notre concession est bien plus qu'un simple lieu de vente
          de motos. Nous sommes fiers de vous proposer une vaste gamme de
          modèles et de marques, le tout à des prix imbattables.
        </p>
        <p>
          Chez Wild Bikes, l'accompagnement de nos clients est au cœur de nos
          préoccupations. Nous mettons un point d'honneur à vous offrir un
          service personnalisé, afin de vous aider à trouver la moto de vos
          rêves. Rejoignez-nous pour vivre l'expérience unique de la route, avec
          une équipe dévouée qui partage votre passion pour l'aventure à
          deux-roues. Que vous soyez novice ou chevronné, chez Wild Bikes,
          chaque passionné de moto trouve son bonheur !
        </p>
      </div>
      <Link className={styles.link_class} to="/">
        <button type="button" className={styles.btn_to_page}>
          Lire la suite
        </button>
      </Link>
      <h3 className={styles.home_h3}>Le blog moto</h3>
      <PreviewBlog />
      <Link className={styles.link_class} to="/">
        <button type="button" className={styles.btn_to_page}>
          Voir plus
        </button>
      </Link>
      <Footer />
    </div>
  );
}
