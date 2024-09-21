import { useEffect, useState, memo } from "react";
import Movie from "../components/Movie";
import React from "react";
import styles from "../css/Home.module.css";

const MemorizedMovie = memo(Movie);

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMoives = async () => {
      console.log("calling movie list api");
      const movieList = await (
        await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        )
      ).json();
      localStorage.setItem("movieList", JSON.stringify(movieList.data.movies));
      setMovies(movieList.data.movies);
    };

    if (localStorage.getItem("movieList") === null) {
      getMoives();
    } else {
      setMovies(JSON.parse(localStorage.getItem("movieList")));
    }

    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      {isLoading ? (
        <div
          className={styles.loader}
          style={{ backgroundColor: "white" }}
        ></div>
      ) : (
        <div className={styles.list}>
          {movies.map((item) => (
            <MemorizedMovie
              key={item.id}
              id={item.id}
              genres={item.genres}
              img={item.medium_cover_image}
              title={item.title}
              score={item.rating}
              content={item.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
