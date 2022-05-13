import styles from './Club.module.css';

export type ChonksClubs = 'Guardian' | 'Monster';

interface ClubProps {
  club: ChonksClubs;
}

const chonksImageCount = 4;

const clubsSummary = {
  Guardian:
    'The Guardians club live in a modern civilization. Guardians are the defenders of their fellow chonk. They have opted to rely on math and science to develop their tech and armaments in order to fight back against those who may want to encroach on their way of living.',
  Monster:
    'Dubbed by those residing in modern chonk society as a result of their rugged, frightening appearances. Monsters are a club of ancient, proud chonk. Living in the outskirts, they operate mysteriously and have been known to attack without warning, for unknown reasons.',
};

const Club = ({ club }: ClubProps) => {
  const renderChonks = (club: ChonksClubs) => {
    const chonks = [];
    for (let i = 1; i <= chonksImageCount; i++) {
      chonks.push(
        <img
          alt={`Chonk from the ${club} Club`}
          key={`${club}-${i}`}
          src={`/img/chonks/chonk_${club}_s_00${i}.webp`}
        />
      );
    }
    return chonks;
  };

  return (
    <section id={`${styles[club.toLowerCase()]}`}>
      <div className={styles.club_info_container}>
        <div className={styles.club_info_chonk_container}>
          <img
            alt={`Chonk from the ${club} Club`}
            className={styles.club_info_chonk}
            src={`/img/chonk_${club.toLowerCase()}_half.webp`}
            title={`${club} Chonk`}
          />
        </div>
        <div className={styles.club_info}>
          <div className={styles.club_info_copy_container}>
            <div className={styles.club_info_chonk_container_m}>
              <img
                alt={`Chonk from the ${club} Club`}
                className={styles.club_info_chonk}
                src={`/img/${club.toLowerCase()}.webp`}
                title={`${club} Chonk`}
              />
            </div>
            <img
              alt={`${club} Club Logo`}
              className={styles.logo}
              src={`/img/chonks_club_${club.toLowerCase()}s.svg`}
            />
            <div className={styles.club_info_copy}>
              <h1>{club}</h1>
              <p>{clubsSummary[club]}</p>
            </div>
          </div>
          <div className={styles.club_info_chonks}>{renderChonks(club)}</div>
        </div>
      </div>
    </section>
  );
};

export default Club;
