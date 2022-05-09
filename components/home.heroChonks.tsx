import styles from '../styles/home.heroChonks.module.css';

const HomeHero = () => (
  <div className={styles.hero_chonks_container}>
    <div className={styles.hero_guardians}>
      <img
        alt="Guardian Chonk"
        className={`chonk ${styles.hero_chonk_t2}`}
        data-club="guardian"
        data-offset="8"
        src="/img/hero/g_t_2.webp"
      />
      <img
        alt="Guardian Chonk"
        className={`chonk ${styles.hero_chonk_t1}`}
        data-club="guardian"
        data-offset="10"
        src="/img/hero/g_t_1.webp"
      />
      <img
        alt="Guardian Chonk"
        className={`chonk ${styles.hero_chonk_b3}`}
        data-club="guardian"
        data-offset="6"
        src="/img/hero/g_b_3.webp"
      />
      <img
        alt="Guardian Chonk"
        className={`chonk ${styles.hero_chonk_b2}`}
        data-club="guardian"
        data-offset="12"
        src="/img/hero/g_b_2.webp"
      />
      <img
        alt="Guardian Chonk"
        className={`chonk ${styles.hero_chonk_b1}`}
        data-club="guardian"
        data-offset="16"
        src="/img/hero/g_b_1.webp"
      />
    </div>
    <div className={styles.hero_monsters}>
      <img
        alt="Monster Chonk"
        className={`chonk ${styles.hero_chonk_t2}`}
        data-club="monster"
        data-offset="8"
        src="/img/hero/m_t_2.webp"
      />
      <img
        alt="Monster Chonk"
        className={`chonk ${styles.hero_chonk_t1}`}
        data-club="monster"
        data-offset="10"
        src="/img/hero/m_t_1.webp"
      />
      <img
        alt="Monster Chonk"
        className={`chonk ${styles.hero_chonk_b3}`}
        data-club="monster"
        data-offset="6"
        src="/img/hero/m_b_3.webp"
      />
      <img
        alt="Monster Chonk"
        className={`chonk ${styles.hero_chonk_b2}`}
        data-club="monster"
        data-offset="12"
        src="/img/hero/m_b_2.webp"
      />
      <img
        alt="Monster Chonk"
        className={`chonk ${styles.hero_chonk_b1}`}
        data-club="monster"
        data-offset="16"
        src="/img/hero/m_b_1.webp"
      />
    </div>
  </div>
);

export default HomeHero;
