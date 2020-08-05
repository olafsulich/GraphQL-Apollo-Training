import React from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper.js";
import styles from "./Character.module.scss";
import { useQuery, gql } from "@apollo/client";

const CharacterQuery = gql`
  query getCharacter($id: ID) {
    character(id: $id) {
      name
      id
      image
      status
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;

const Character = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(CharacterQuery, {
    variables: { id },
  });

  console.log(data);

  const character = data?.character;

  return (
    <div className={styles.wrapper}>
      <section className={styles.app}>
        <h1>Rick and Morty</h1>
        <div className={styles.cardWrapper}>
          {loading ? (
            <p>loading...</p>
          ) : (
            <Card
              key={character.id}
              name={character.name}
              image={character.image}
              location={character.location.name}
              origin={character.origin.name}
              status={character.status}
              id={id}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Character;
