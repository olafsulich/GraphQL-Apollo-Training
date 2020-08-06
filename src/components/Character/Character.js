import React from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import styles from "./Character.module.scss";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

const GET_CHARACTER = gql`
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

      episode {
        id
        name
      }
    }
  }
`;

const GET_EPISODES = gql`
  query getEpisodes($id: ID) {
    character(id: $id) {
      episode {
        id
        name
      }
    }
  }
`;

const Character = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  const [
    getEpisodes,
    { data: EpisodesData, loading: EpisodesLoading },
  ] = useLazyQuery(GET_EPISODES, {
    variables: { id },
  });

  const character = data?.character;

  return (
    <div className={styles.wrapper}>
      <section className={styles.app}>
        <h1>Character</h1>
        {loading ? (
          <p>loading</p>
        ) : (
          <>
            <div className={styles.cardWrapper}>
              {
                <Card
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  location={character.location.name}
                  origin={character.origin.name}
                  status={character.status}
                  id={id}
                />
              }
            </div>
          </>
        )}
        <div className={styles.episodesWrapper}>
          <h2>Episodes</h2>
          <button className={styles.button} onClick={getEpisodes}>
            Load episodes
          </button>
          {EpisodesLoading ? (
            <p>loading</p>
          ) : (
            <>
              {EpisodesData &&
                EpisodesData.character.episode.map(({ name, id }) => (
                  <EpisodeCard key={character.id} name={name} id={id} />
                ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Character;
