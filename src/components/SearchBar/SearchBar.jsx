import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import css from "./SearchBar.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function SearchBar({ onSubmit }) {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    if (searchText.trim() === "") {
      setError("Please enter text to search for images");
    } else {
      onSubmit(searchText);
      setSearchText("");
    }
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
    setError(null);
  };

  const handleFocus = () => {
    setError(null);
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.inputWrapper}>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={searchText}
              onChange={handleChange}
              onFocus={handleFocus}
              className={css.input}
            />
            <button
              type="submit"
              className={css.iconButton}
              aria-label="Search"
            >
              <FiSearch className={css.icon} />
            </button>
          </div>
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </header>
      <ErrorMessage message={error} />
    </>
  );
}

export default SearchBar;
