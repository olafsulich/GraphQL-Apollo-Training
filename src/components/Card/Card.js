import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ name, image, status, location, origin, id }) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt="Character" />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textSection}>
          <Link to={`/${id}`} className={styles.link}>
            <h2 className={styles.heading}>{name}</h2>
          </Link>
          <p className={styles.status}>
            <span className={styles.statusIcon} />
            {status}
          </p>
        </div>

        <div className={styles.textSection}>
          <h4 className={styles.textGray}>Last known location:</h4>
          <a href="/" className={styles.link}>
            {location}
          </a>
        </div>
        <div className={styles.textSection}>
          <h4 className={styles.textGray}>First seen in:</h4>
          <a href="/" className={styles.link}>
            {origin}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
