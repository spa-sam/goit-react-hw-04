import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, hasMore }) => {
  if (!hasMore) {
    return null;
  }

  return (
    <button className={css.buttonLoadMore} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
