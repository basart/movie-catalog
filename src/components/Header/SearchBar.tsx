import { useState } from "react";

import styles from "./header.module.css";
import { useMoviesQuery } from "@/hooks/use-movies-query";

function SearchBar() {
  const [searchPhrase, setSearchPhrase] = useState("");

  useMoviesQuery(searchPhrase);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchPhrase(event.target.value);
  }

  return (
    <input
      type="text"
      className={styles["search-input"]}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
