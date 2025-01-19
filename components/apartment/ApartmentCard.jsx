"use client";
import styles from "./ApartmentCard.module.css";
import Link from "next/link";
import Image from "next/image";

const ApartmentCard = ({ apartment }) => {
  return (
    <Link href={`/apartment/${apartment._id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={`${apartment.image}`}
          alt={apartment.name}
          className={styles.image}
          width={500}
          height={300}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{apartment.name}</h3>
        <div className={styles.details}>
          <p className={styles.detailItem}>
            <span>Unit: </span>
            {apartment.unitNumber}
          </p>
          <p className={styles.detailItem}>
            <span>Project: </span>
            {apartment.project}
          </p>
          {apartment.price && (
            <p className={styles.price}>${apartment.price.toLocaleString()}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
