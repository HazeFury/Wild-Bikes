import { useState } from "react";
import PreviewCardListBikes from "./PreviewCardListBikes";
import styles from "./PreviewListBikes.module.css";
import "../../../App.css";

export default function PreviewListBikes() {
  const [previewBikes] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  return (
    <div className={styles.previewlistbikes_container}>
      {previewBikes.map((bike) => (
        <PreviewCardListBikes key={bike.id} />
      ))}
    </div>
  );
}
