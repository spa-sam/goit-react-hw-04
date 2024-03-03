import styles from "./ImageCard.module.css";

function ImageCard({ image }) {
  return (
    <div className={styles.card}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;
