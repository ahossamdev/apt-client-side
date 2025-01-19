export const validateApartmentForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.length < 3 || formData.name.length > 100) {
    errors.name = "Name must be between 3 and 100 characters";
  }

  // Unit Number validation
  if (!formData.unitNumber) {
    errors.unitNumber = "Unit number is required";
  } else if (isNaN(formData.unitNumber) || Number(formData.unitNumber) < 0) {
    errors.unitNumber = "Unit number must be a positive number";
  }

  // Area validation
  if (!formData.area) {
    errors.area = "Area is required";
  } else if (isNaN(formData.area) || Number(formData.area) < 0) {
    errors.area = "Area must be a positive number";
  }

  // Project validation
  if (!formData.project.trim()) {
    errors.project = "Project name is required";
  } else if (formData.project.length < 3 || formData.project.length > 300) {
    errors.project = "Project name must be between 3 and 300 characters";
  }

  // Description validation
  if (!formData.description.trim()) {
    errors.description = "Description is required";
  } else if (
    formData.description.length < 10 ||
    formData.description.length > 5000
  ) {
    errors.description = "Description must be between 10 and 5000 characters";
  }

  // Price validation
  if (!formData.price) {
    errors.price = "Price is required";
  } else if (isNaN(formData.price) || Number(formData.price) < 0) {
    errors.price = "Price must be a positive number";
  }

  // Bedrooms validation
  if (!formData.bedrooms) {
    errors.bedrooms = "Number of bedrooms is required";
  } else if (isNaN(formData.bedrooms) || Number(formData.bedrooms) < 0) {
    errors.bedrooms = "Number of bedrooms must be a positive number";
  }

  // Bathrooms validation
  if (!formData.bathrooms) {
    errors.bathrooms = "Number of bathrooms is required";
  } else if (isNaN(formData.bathrooms) || Number(formData.bathrooms) < 0) {
    errors.bathrooms = "Number of bathrooms must be a positive number";
  }

  // City validation
  if (!formData.city.trim()) {
    errors.city = "City is required";
  }

  // Location validation
  if (!formData.location.trim()) {
    errors.location = "Location is required";
  }

  // Image validation
  if (!formData.image) {
    errors.image = "Image is required";
  }

  return errors;
};
