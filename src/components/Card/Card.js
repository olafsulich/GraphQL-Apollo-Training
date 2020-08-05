import React from "react";
import styles from "./Card.module.scss";
const Card = () => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="https://rickandmortyapi.com/api/character/avatar/131.jpeg"
          alt="Character"
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textSection}>
          <a href="/" className={styles.link}>
            <h2 className={styles.heading}>Gar Gloonch</h2>
          </a>
          <p className={styles.status}>
            <span className={styles.statusIcon} />
            Dead
          </p>
        </div>

        <div className={styles.textSection}>
          <h4 className={styles.textGray}>Last known location:</h4>
          <a href="/" className={styles.link}>
            Nuptia 4
          </a>
        </div>
        <div className={styles.textSection}>
          <h4 className={styles.textGray}>First seen in:</h4>
          <a href="/" className={styles.link}>
            Nuptia 4
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
