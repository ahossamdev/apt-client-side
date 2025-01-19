"use client";

import DetailsLoader from "./../../../components/details-loader/DetailsLoader";
import PropertyDetails from "./../../../components/PropertyDetails/PropertyDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Error from "./../../../components/error/Error";

const ApartmentDetails = () => {
  const [apartment, setApartment] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/apartments/${params.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Apartment not found");
          }
          return response.json();
        })
        .then((data) => {
          setApartment(data);
          setError(null);
        })
        .catch((error) => {
          console.error("Error fetching apartments:", error);
          setError(error.message);
        });
    }
  }, [params.id]);

  if (error) return <Error message={error} />;
  if (!apartment) return <DetailsLoader />;
  return (
    <>
      <PropertyDetails property={apartment} />
    </>
  );
};

export default ApartmentDetails;
