import styles from "./ImageCard.module.css";

function ImageCard({ image, onImageClick }) {
  return (
    <div
      className={styles.card}
      onClick={() => onImageClick(image.urls.regular)}
    >
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;
