import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [searchText, setSearchText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // новое состояние для открытия/закрытия модального окна
  const [selectedImage, setSelectedImage] = useState(null); // новое состояние для выбранного изображения

  const handleSearchSubmit = (text) => {
    setSubmittedText(text);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const openModal = (image) => {
    // новая функция для открытия модального окна
    setIsModalOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    // новая функция для закрытия модального окна
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
      {/* передайте функцию openModal в ImageGallery */}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
