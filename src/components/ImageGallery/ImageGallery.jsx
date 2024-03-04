import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { toast } from "react-hot-toast";
import CustomLoader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function ImageGallery({ searchText, onImageClick }) {
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

  useEffect(() => {
    if (page > 1) {
      fetchImages(searchText, page);
    }
  }, [page]);

  const fetchImages = async (query, page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=12&page=${page}`,
        {
          headers: {
            Authorization:
              "Client-ID it-___ha_onFR-GVhyUV5CTFJrLwJqLYl0WmECjIHzo",
          },
        }
      );
      if (response.data.results.length === 0) {
        if (images.length === 0) {
          toast.error("No images to load");
        } else {
          toast.error("No more images to load");
        }
      }
      setImages((prevImages) => [...prevImages, ...response.data.results]);
      setIsLoading(false);
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }, 200);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to load images. Please try again.");
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <ul className={styles.gallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
      {isLoading && <CustomLoader />}
      {!isLoading && <LoadMoreBtn onClick={handleLoadMore} images={images} />}
    </div>
  );
}

export default ImageGallery;
