import NavBar from "../../components/HomeComponents/NavBar/NavBar";
import WallPaper from "../../components/HomeComponents/WallPaper/WallPaper";
import PreviewListBikes from "../../components/HomeComponents/PreviewListBikes/PreviewListBikes";
import PreviewBrandList from "../../components/HomeComponents/PreviewBrandList/PreviewBrandList";
import styles from "./Home.module.css";
import "../../App.css";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <NavBar />
      <WallPaper />
      <h3>Nos motos du moment</h3>
      <PreviewListBikes />
      <button type="button" className={styles.btn_to_page}>
        Voir plus
      </button>
      <h3>Nos marques</h3>
      <PreviewBrandList />
      <button type="button" className={styles.btn_to_page}>
        Voir toutes nos marques
      </button>
    </div>
  );
}
