import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [searchText, setSearchText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = (text) => {
    setSubmittedText(text);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const openModal = (image) => {
    setIsModalOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
        image={selectedImage}
      />
    </>
  );
}

export default App;
