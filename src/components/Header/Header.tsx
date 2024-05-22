import ProfileDropdown from "./ProfileDropdown";
import SearchBar from "./SearchBar";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles["header-container"]}>
      <div className="container">
        <div className={styles.header}>
          <h1>Movie Catalog</h1>
          <div className={styles["search-bar-container"]}>
            <SearchBar />
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
