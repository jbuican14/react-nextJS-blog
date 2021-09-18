import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/juti-android-icon-192x192.png"
          alt="juti image"
          width={192}
          height={192}
        />
      </div>
      <h1>Hi, I'm Juti</h1>
      <p>
        I blog about web development -- especially frontend frameworks like
        React
      </p>
    </section>
  );
}
