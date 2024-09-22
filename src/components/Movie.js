import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";
import styles from "../css/Home.module.css";

function Movie({ id, img, genres = [], title, score, content }) {
  console.log("movie rendered");
  return (
    <div className={styles.item} key={id}>
      <img className={styles.image} src={img} alt={title} />
      <div className={styles.info}>
        <Link to={`/movie/${id}`} className={styles.title}>
          {title}
        </Link>
        <p className={styles.genres}>{genres.join(", ")}</p>
        <p className={styles.rating}>Rating: {score}</p>
        <p className={styles.content}>
          content:{" "}
          {content.length > 200 ? `${content.slice(0, 200)}...` : content}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  genres: PropTypes.array,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
