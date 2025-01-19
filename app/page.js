"use client";
import Loader from "./../components/loader/Loader";
import { getBackendUrl } from "./../utils/api";
import { useState, useEffect } from "react";
import ApartmentCard from "./../components/apartment/ApartmentCard";
import styles from "./../components/apartment/ApartmentCard.module.css";
import Sidebar from "./../components/sidebar/Sidebar";
import "./../app/globals.css";
import Pagination from "./../components/pagination/Pagination";
import Error from "./../components/error/Error";
import NoApartments from "./../components/noApartments/NoApartments";

const Apartments = () => {
  const [apartments, setApartments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiUrl = getBackendUrl();
  const [error, setError] = useState(null);

  useEffect(() => {
    const skip = (currentPage - 1) * 9;
    setIsLoading(true);
    setError(null);

    const queryString = new URLSearchParams({
      ...searchParams,
      page: currentPage,
      skip: skip,
    }).toString();

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/apartments${
      queryString ? `?${queryString}` : ""
    }`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch apartments");
        }
        return response.json();
      })
      .then((data) => {
        setApartments(data.apartments);
        setTotalPages(Math.ceil(data.pagination.totalPages));
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching apartments:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [apiUrl, searchParams, currentPage]);

  const handleSearch = (params) => {
    setSearchParams(params);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Sidebar onSearch={handleSearch} />
        {error ? (
          <Error message={error} />
        ) : isLoading ? (
          <div className={styles.loaderGrid}>
            <Loader />
          </div>
        ) : apartments && apartments.length > 0 ? (
          <>
            <div className={styles.grid}>
              {apartments.map((apartment) => (
                <ApartmentCard key={apartment._id} apartment={apartment} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <NoApartments />
        )}
      </div>
    </div>
  );
};

export default Apartments;
