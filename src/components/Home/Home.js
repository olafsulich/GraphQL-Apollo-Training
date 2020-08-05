import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Card from "../Card/Card";
import { gql, useQuery } from "@apollo/client";
import styles from "./Home.module.scss";

const testQuery = gql`
  {
    characters {
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
  const { data, loading } = useQuery(testQuery);
  return (
    <div className={styles.appWrapper}>
      <section className={styles.app}>
        <h1>Rick and Morty</h1>
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
