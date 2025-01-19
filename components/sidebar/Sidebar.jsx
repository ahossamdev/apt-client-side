import { useState } from "react";
import { FaSearch, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import styles from "./Sidebar.module.css";

export default function Sidebar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("unitNumber");
  const [error, setError] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearch = (e) => {
    e.preventDefault();

    if (
      filterBy === "unitNumber" &&
      searchQuery.trim() !== "" &&
      !/^\d+$/.test(searchQuery.trim())
    ) {
      setError("Please enter numbers only for Unit Number");
      return;
    }

    setError("");

    const searchParams = {
      [filterBy]: searchQuery.trim(),
    };

    const cleanParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value)
    );

    onSearch(cleanParams);
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;

    if (filterBy === "unitNumber" && value !== "") {
      if (!/^\d+$/.test(value)) {
        setError("Please enter numbers only for Unit Number");
        return;
      }
    }

    setError("");
    setSearchQuery(value);
  };

  const handleSort = (direction) => {
    setSortDirection(direction);
    const searchParams = {
      [filterBy]: searchQuery.trim(),
      sort: direction,
    };

    const cleanParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value)
    );

    onSearch(cleanParams);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <h2 className={styles.sidebarTitle}>Search Filters</h2>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.filterGroup}>
            <label htmlFor="filter" className={styles.label}>
              Filter By
            </label>
            <select
              id="filter"
              className={styles.filterSelect}
              value={filterBy}
              onChange={(e) => {
                setFilterBy(e.target.value);
                setError("");
                setSearchQuery("");
              }}
            >
              <option className={styles.option} value="name">
                Apartment Name
              </option>
              <option className={styles.option} value="unitNumber">
                Unit Number
              </option>
              <option className={styles.option} value="project">
                Project
              </option>
            </select>
          </div>

          <div className={styles.searchGroup}>
            <label htmlFor="search" className={styles.label}>
              Search
            </label>
            <div className={styles.searchInputWrapper}>
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={handleSearchInput}
                placeholder={`Search by ${filterBy}...`}
                className={`${styles.searchInput} ${
                  error ? styles.errorInput : ""
                }`}
              />
              <button type="submit" className={styles.searchButton}>
                <FaSearch />
              </button>
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.label}>Sort</label>
            <div className={styles.sortButtons}>
              <button
                type="button"
                className={`${styles.sortButton} ${
                  sortDirection === "asc" ? styles.active : ""
                }`}
                onClick={() => handleSort("asc")}
              >
                <FaSortAlphaDown /> A-Z
              </button>
              <button
                type="button"
                className={`${styles.sortButton} ${
                  sortDirection === "desc" ? styles.active : ""
                }`}
                onClick={() => handleSort("desc")}
              >
                <FaSortAlphaUp /> Z-A
              </button>
            </div>
          </div>
          {error && <div className={styles.errorMessage}>{error}</div>}
        </form>
      </div>
    </aside>
  );
}
