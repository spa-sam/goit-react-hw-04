import { useState, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [searchText, setSearchText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = useCallback((text) => {
    setSubmittedText(text);
  }, []);

  const handleSearchChange = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  const openModal = useCallback((image) => {
    setIsModalOpen(true);
    setSelectedImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }, []);

  return (
    <>
      <SearchBar
        onSubmit={handleSearchSubmit}
        onChange={handleSearchChange}
        searchText={searchText}
      />
      <ImageGallery searchText={submittedText} onImageClick={openModal} />{" "}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </>
  );
}

export default App;
