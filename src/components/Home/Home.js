import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Card from "../Card/Card";
import { gql, useQuery } from "@apollo/client";
import styles from "./Home.module.scss";

const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      results {
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
  }
`;

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: page },
  });

  const handleIncrement = () => setPage((prevState) => prevState + 1);

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        page: page + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const newCharacters = Object.assign({}, prev, {
          characters: {
            ...prev.characters,
            ...fetchMoreResult.characters,
          },
        });
        return newCharacters;
      },
    });
    handleIncrement();
  };

  return (
    <div className={styles.appWrapper}>
      <section className={styles.app}>
        <h1>Rick and Morty</h1>
        <button className={styles.button} onClick={loadMoreCharacters}>
          Next page
        </button>
        <Wrapper>
          {loading ? (
            <p>loading...</p>
          ) : (
            data.characters.results.map(
              ({ name, image, status, location, origin, id }) => (
                <Card
                  key={id}
                  name={name}
                  image={image}
                  location={location.name}
                  origin={origin.name}
                  status={status}
                  id={id}
                />
              )
            )
          )}
        </Wrapper>
      </section>
    </div>
  );
};

export default Home;
