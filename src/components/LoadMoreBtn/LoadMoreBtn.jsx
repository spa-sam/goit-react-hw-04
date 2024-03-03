import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick, images }) {
  if (!images.length) {
    return null;
  }

  return (
    <button className={css.buttonLoadMore} onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
