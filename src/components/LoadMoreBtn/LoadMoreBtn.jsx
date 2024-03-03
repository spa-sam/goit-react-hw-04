import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick, images }) {
  if (!images.length) {
    return null;
  }

  return (
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
