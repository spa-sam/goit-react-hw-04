import css from "./ImageCard.module.css";

function ImageCard({ image, onImageClick }) {
  const { urls, alt_description } = image;
  return (
    <div className={css.card} onClick={() => onImageClick(image)}>
      <img src={urls.small} alt={alt_description} className={css.image} />
    </div>
  );
}

export default ImageCard;
