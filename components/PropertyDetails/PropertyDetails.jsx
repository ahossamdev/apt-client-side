import styles from "./PropertyDetails.module.css";
import Image from "next/image";

const PropertyDetails = ({ property }) => {
  const {
    name,
    unitNumber,
    area,
    project,
    description,
    price,
    city,
    image,
    bedrooms,
    bathrooms,
  } = property;
  return (
    <div className={styles.container}>
      <div className={styles.propertyCard}>
        <div className={styles.imageContainer}>
          <Image
            src={
              image ||
              "https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU"
            }
            alt={name}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{name}</h1>

          <div className={styles.location}>
            <span className={styles.city}>{city}</span>
            <span className={styles.unitNumber}>Unit {unitNumber}</span>
          </div>

          <div className={styles.price}>${price.toLocaleString()}/month</div>

          <div className={styles.specs}>
            <div className={styles.specItem}>
              <span className={styles.specValue}>{bedrooms}</span>
              <span className={styles.specLabel}>Bedrooms</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specValue}>{bathrooms}</span>
              <span className={styles.specLabel}>Bathrooms</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specValue}>{area}</span>
              <span className={styles.specLabel}>Sq Ft</span>
            </div>
          </div>

          <div className={styles.description}>
            <h2 className={styles.sectionTitle}>About this property</h2>
            <p>{description}</p>
          </div>

          <div className={styles.projectInfo}>
            <h2 className={styles.sectionTitle}>Project</h2>
            <p>{project}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
