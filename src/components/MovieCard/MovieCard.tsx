import { MovieItem } from "@/services/api";
import styles from "./movie-card.module.css";

function MovieCard({ title, year, poster, imdbID, type }: MovieItem) {
  const onImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.target.src = "/placeholder-image.png";
  };

  return (
    <article className={styles.card}>
      <div className={styles["card__image-container"]}>
        <img
          src={poster}
          alt={title}
          className={styles.card__image}
          onError={onImageError}
        />
      </div>
      <div className={styles.card__content}>
        <h3>{title}</h3>
        <p>{year}</p>
        <p>{imdbID}</p>
        <p>{type}</p>
      </div>
    </article>
  );
}

export default MovieCard;
