import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import classes from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <article className={classes.cardWrapper}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={movie.title || "Movie Poster"}
        className={classes.poster}
      />
      <div className={classes.overlay}>
        <div className={classes.controls}>
          <PlayCircleFilledIcon />
          <AddCircleOutlineIcon />
        </div>
        <div className={classes.metadata}>
          <p>duration</p>
          <p>genre</p>
        </div>
      </div>
    </article>
  );
}
