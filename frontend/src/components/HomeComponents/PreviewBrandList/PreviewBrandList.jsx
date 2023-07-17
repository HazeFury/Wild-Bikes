import { useState } from "react";
import PreviewCardBrand from "./PreviewCardBrand";
import styles from "./PreviewBrandList.module.css";
import "../../../App.css";

export default function PreviewBrandList() {
  const [previewBikes] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  return (
    <div className={styles.previewlistbikes_container}>
      {previewBikes.map((bike) => (
        <PreviewCardBrand key={bike.id} />
      ))}
    </div>
  );
}
