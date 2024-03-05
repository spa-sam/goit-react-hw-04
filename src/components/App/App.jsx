import { useState, useCallback, useEffect } from "react";
import Modal from "react-modal";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import useImageFetcher from "../../hooks/useImageFetcher";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";

function App() {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [prevLoading, setPrevLoading] = useState(false);

  const { images, isLoading, hasMore } = useImageFetcher(searchText, page);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleSearchSubmit = useCallback((text) => {
    setSearchText(text);
    setPage(1);
  }, []);

  const handleLoadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const openModal = useCallback((image) => {
    setIsModalOpen(true);
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (prevLoading && !isLoading) {
      scrollToBottom();
    }
    setPrevLoading(isLoading);
  }, [isLoading, prevLoading]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && hasMore && (
        <LoadMoreBtn onClick={handleLoadMore} hasMore={hasMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
