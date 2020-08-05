import React from "react";
import styles from "./EpisodeCard.module.scss";

const EpisodeCard = ({ name }) => (
  <article className={styles.wrapper}>
    <h3 className={styles.heading}>{name}</h3>
  </article>
);

export default EpisodeCard;
