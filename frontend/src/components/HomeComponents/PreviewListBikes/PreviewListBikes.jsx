import { useState, useEffect } from "react";
import PreviewCardListBikes from "./PreviewCardListBikes";
import styles from "./PreviewListBikes.module.css";
import "../../../App.css";
import instance from "../../../services/APIService";

export default function PreviewListBikes() {
  const [previewBikes, setPreviewBikes] = useState([]);

  useEffect(() => {
    instance
      .get(`/preview`)
      .then((res) => {
        setPreviewBikes(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={styles.previewlistbikes_container}>
      {previewBikes.map((bike) => (
        <PreviewCardListBikes key={bike.id} bike={bike} />
      ))}
    </div>
  );
}
