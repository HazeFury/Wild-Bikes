import PreviewCardBrand from "./PreviewCardBrand";
import styles from "./PreviewBrandList.module.css";
import "../../../App.css";

import Bmw from "../../../assets/BrandLogo/bmw.png";
import Kawasaki from "../../../assets/BrandLogo/kawasaki.png";
import Ducati from "../../../assets/BrandLogo/ducati.png";
import Suzuki from "../../../assets/BrandLogo/suzuki.png";
import Yamaha from "../../../assets/BrandLogo/yamaha.png";
import Honda from "../../../assets/BrandLogo/honda.png";
// import Harley from "../../../assets/BrandLogo/harley.png";
// import Indian from "../../../assets/BrandLogo/indian.png";
// import Triumph from "../../../assets/BrandLogo/triumph.png";

export default function PreviewBrandList() {
  const previewBikes = [
    { id: 1, brandName: "Bmw", image: `${Bmw}` },
    { id: 2, brandName: "Kawasaki", image: `${Kawasaki}` },
    { id: 3, brandName: "Ducati", image: `${Ducati}` },
    { id: 4, brandName: "Suzuki", image: `${Suzuki}` },
    { id: 5, brandName: "Honda", image: `${Honda}` },
    { id: 6, brandName: "Yamaha", image: `${Yamaha}` },
  ];
  return (
    <div className={styles.previewlistbrand_container}>
      {previewBikes.map((bike) => (
        <PreviewCardBrand key={bike.id} previewBikes={bike} />
      ))}
    </div>
  );
}
