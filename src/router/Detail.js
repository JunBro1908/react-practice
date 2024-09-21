import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movieData, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      console.log("calling movie API...");
      const movieObj = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(movieObj.data.movie);
    };
    getMovie();
  }, []);

  console.log(movieData);

  return (
    <div className={styles.movie_detail}>
      <div
        className={styles.movie_background}
        style={{ backgroundImage: `url(${movieData.background_image})` }}
      />
      <div className={styles.movie_info}>
        <h1>
          {movieData.title} ({movieData.year})
        </h1>
        <img
          className={styles.movie_cover}
          src={movieData.large_cover_image}
          alt={movieData.title}
        />{" "}
        <p>
          <strong>Genres:</strong>{" "}
          {movieData.genres !== undefined
            ? movieData.genres.join(", ")
            : "없음"}
        </p>
        <p>
          <strong>Rating:</strong> {movieData.rating} / 10
        </p>
        <p>
          <strong>Runtime:</strong> {movieData.runtime} minutes
        </p>
        <p>
          <strong>Likes:</strong> {movieData.like_count}
        </p>
        <p>
          <strong>Language:</strong> {movieData.language}
        </p>
        <p>
          <strong>Uploaded on:</strong> {movieData.date_uploaded}
        </p>{" "}
        <p>
          <strong>content:</strong> {movieData.description_intro}
        </p>
        <a
          className={styles.more_info}
          href={movieData.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Info
        </a>
      </div>
    </div>
  );
}

export default Detail;
