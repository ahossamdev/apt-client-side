"use client";

import { useState } from "react";
import styles from "./AddApartment.module.css";
import { useRouter } from "next/navigation";
import { validateApartmentForm } from "./../../../app/utils/apartmentValidation";

const AddApartment = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    unitNumber: "",
    area: "",
    project: "",
    description: "",
    price: "",
    city: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const validateForm = () => {
    const newErrors = validateApartmentForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/apartments`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setErrorMessage("Failed to add apartment. Please try again.");
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      {showSuccess && (
        <div className={styles.successNotification}>
          Apartment added successfully!
        </div>
      )}
      {errorMessage && (
        <div className={styles.errorNotification}>{errorMessage}</div>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Add New Apartment</h1>

        {serverError && <div className={styles.serverError}>{serverError}</div>}

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Property Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? styles.errorInput : ""}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="unitNumber">Unit Number</label>
            <input
              type="text"
              id="unitNumber"
              name="unitNumber"
              value={formData.unitNumber}
              onChange={handleInputChange}
              className={errors.unitNumber ? styles.errorInput : ""}
            />
            {errors.unitNumber && (
              <span className={styles.error}>{errors.unitNumber}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="price">Price (per month)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className={errors.price ? styles.errorInput : ""}
            />
            {errors.price && (
              <span className={styles.error}>{errors.price}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="area">Area (sq ft)</label>
            <input
              type="number"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
              className={errors.area ? styles.errorInput : ""}
            />
            {errors.area && <span className={styles.error}>{errors.area}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bedrooms">Bedrooms</label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              className={errors.bedrooms ? styles.errorInput : ""}
            />
            {errors.bedrooms && (
              <span className={styles.error}>{errors.bedrooms}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bathrooms">Bathrooms</label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              className={errors.bathrooms ? styles.errorInput : ""}
            />
            {errors.bathrooms && (
              <span className={styles.error}>{errors.bathrooms}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={errors.city ? styles.errorInput : ""}
            />
            {errors.city && <span className={styles.error}>{errors.city}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g., Downtown, Near Metro Station"
              value={formData.location}
              onChange={handleInputChange}
              className={errors.location ? styles.errorInput : ""}
            />
            {errors.location && (
              <span className={styles.error}>{errors.location}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="project">Project Name</label>
            <input
              type="text"
              id="project"
              name="project"
              value={formData.project}
              onChange={handleInputChange}
              className={errors.project ? styles.errorInput : ""}
            />
            {errors.project && (
              <span className={styles.error}>{errors.project}</span>
            )}
          </div>

          <div className={styles.formGroup + " " + styles.fullWidth}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={errors.description ? styles.errorInput : ""}
            />
            {errors.description && (
              <span className={styles.error}>{errors.description}</span>
            )}
          </div>

          <div className={styles.formGroup + " " + styles.fullWidth}>
            <label htmlFor="image">Property Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
              accept="image/*"
              className={errors.image ? styles.errorInput : ""}
            />
            {errors.image && (
              <span className={styles.error}>{errors.image}</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Apartment"}
        </button>
      </form>
    </div>
  );
};

export default AddApartment;
