import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

function App() {
  const [searchText, setSearchText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSearchSubmit = (text) => {
    setSubmittedText(text);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <SearchBar
        onSubmit={handleSearchSubmit}
        onChange={handleSearchChange}
        searchText={searchText}
      />
      <ImageGallery searchText={submittedText} />
    </>
  );
}

export default App;
