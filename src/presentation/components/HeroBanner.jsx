import classes from "./HeroBanner.module.css";

export default function HeroBanner({ banner, title, description }) {
  return (
    <section
      className={classes.banner}
      style={{
        backgroundImage: `
      url(${banner})
    `,
      }}
    >
      <div className={classes.content}>
        <h1>{title}</h1>
        <p>{description}</p>

        <div>
          <button className={classes.playButton}>Play</button>
          <button className={classes.infoButton}>More info</button>
        </div>
      </div>
    </section>
  );
}
