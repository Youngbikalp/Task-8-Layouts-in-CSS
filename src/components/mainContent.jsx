import styles from "../styles/mainContent.module.css";

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.person}>
        <div className={styles.imageContainer}>
          <img
            src="https://www.thesun.co.uk/wp-content/uploads/2023/08/ksi-celebrates-defeating-faze-temper-788538304.jpg"
            alt="ksi"
          />
        </div>
        <h1>KSI</h1>
        <p>
          KSI is an English YouTuber, rapper, and boxer. He is a co-founder and
          member of the British YouTube group known as the Sidemen. He is the
          CEO of Misfits Boxing and the co-owner of Prime Hydration, XIX Vodka,
          and a restaurant chain known as Sides.
        </p>
      </div>

      <div className={styles.vs}>VS</div>

      <div className={styles.person}>
        <div className={styles.imageContainer}>
          <img
            src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTanQTr6cGGHoysIHpqCVIYx487Jg6Gn8yyzruOjQYReQlw9qNKH6GaLHs5W5vkkFe82fDR-Q5eljdnbNs"
            alt="TommyFury"
          />
        </div>
        <h1>Tommy Fury</h1>
        <p>
          Tommy Fury is a professional boxer and reality TV personality. He is
          the younger half-brother of heavyweight world champion Tyson Fury. He
          was born in Manchester, England, on May 7, 1999. He is also known by
          the nickname "TNT," which stands for trinitrotoluene, the main
          ingredient in dynamite.
        </p>
      </div>
    </div>
  );
}

export default MainContent;
