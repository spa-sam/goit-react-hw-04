import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css"; // Импортируйте CSS модуль
import { toast } from "react-hot-toast";
import CustomLoader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function ImageGallery({ searchText }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchText) {
      setIsLoading(true);
      setImages([]);
      setPage(1);
      fetchImages(searchText, 1);
    }
  }, [searchText]);

  const fetchImages = (query, page) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=12&page=${page}`,
        {
          headers: {
            Authorization:
              "Client-ID it-___ha_onFR-GVhyUV5CTFJrLwJqLYl0WmECjIHzo",
          },
        }
      )
      .then((response) => {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to load images. Please try again.");
        setIsLoading(false);
      });
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchImages(searchText, page + 1);
  };

  return (
    <div>
      <ul className={styles.gallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
      {isLoading && <CustomLoader />}
      <LoadMoreBtn onClick={handleLoadMore} images={images} />
    </div>
  );
}
export default ImageGallery;
