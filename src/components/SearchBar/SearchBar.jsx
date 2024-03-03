import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import css from "./SearchBar.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function SearchBar({ onSubmit, onChange, searchText }) {
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    if (searchText.trim() === "") {
      setError("Please enter text to search for images");
    } else {
      onSubmit(searchText);
      onChange({ target: { value: "" } });
    }
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
              onChange={onChange}
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
