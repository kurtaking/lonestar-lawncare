import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          lonestar lawncare&nbsp;
          <br /> corsicana, tx 75110&nbsp;
          <br />
          <br />
          Jaxson Brown
          <br />
        </p>
      </div>
    </main>
  );
}
