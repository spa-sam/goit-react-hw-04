import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const useImageFetcher = (searchText, page) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (searchText) {
      setIsLoading(true);
      setImages([]);
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
        setHasMore(false);
        if (images.length === 0) {
          toast("No images found for the given search query.");
        } else {
          toast("No more images to load.");
        }
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setHasMore(response.data.results.length === 12);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 404) {
        toast("No more images to load.");
      } else {
        toast.error("Failed to load images. Please try again.");
      }
      setIsLoading(false);
    }
  };

  return { images, isLoading, hasMore };
};

export default useImageFetcher;
