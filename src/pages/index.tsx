import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Image from 'next/image';

import MainLayout from '../components/layout.main';
import HomeNavigation from '../components/home.navigation';
import HeroChonks from '../components/home.heroChonks';
import TeamMembersList from '../components/TeamMembersList/TeamMembersList';

import styles from '../styles/home.module.css';

const Page = () => {
  const [trailerMuted, setTrailerMuted] = useState(true);

  useEffect(() => {
    const parallax = (e: MouseEvent) => {
      const hero = document.getElementById(styles.hero);
      document.querySelectorAll<HTMLElement>('.chonk').forEach((layer) => {
        const movementVelocity =
          layer.getAttribute('data-movement-velocity') ?? '1';
        const movementVelocityNum = parseInt(movementVelocity);
        const normX = 150;
        const normY = 120;
        const pageX = e.pageX;
        const pageY = e.pageY;
        const wInnerHeight = window.innerHeight;
        const wInnerWidth = window.innerWidth;
        const isWithinActiveArea = (
          axisOffset: number,
          windowDimension: number
        ) => axisOffset <= windowDimension * 0.8;
        const parallaxOffset = (axisOffset: number, windowDimension: number) =>
          windowDimension - axisOffset * movementVelocityNum;

        const club = layer.getAttribute('data-club');

        if (hero)
          if (pageY < wInnerHeight) {
            // adjust background color depending on x axis location
            pageX < wInnerWidth / 2
              ? (hero.style.backgroundColor = '#acdd83')
              : (hero.style.backgroundColor = '#fc595c');
          } else {
            hero.style.backgroundColor = '#141414';
          }

        if (
          isWithinActiveArea(pageX, wInnerWidth) &&
          isWithinActiveArea(pageY, wInnerHeight)
        ) {
          const y = parallaxOffset(pageY, wInnerHeight) / normY;
          let x;

          if (club === 'guardian') {
            x = parallaxOffset(pageX, wInnerWidth) / normX;
          } else {
            // slow down movement of monsters
            x = (wInnerWidth - (pageX / 2) * movementVelocityNum) / normX;
          }

          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      });
    };

    if (
      !navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    ) {
      document.addEventListener('mousemove', parallax);
    }
    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  }, []);

  const unmuteVideo = () => {
    const video = document.getElementById('trailer') as HTMLVideoElement;
    if (video) {
      video.muted = !trailerMuted;
      setTrailerMuted(!trailerMuted);
    }
  };

  return (
    <main className={styles.section_container}>
      <section id={styles.hero}>
        <div className={styles.hero_bg_container}>
          <img
            alt="Chonk hero background"
            className={styles.hero_bg}
            src="/img/hero/bg_shape.svg"
          />
        </div>
        <div className={styles.hero_content_container}>
          <img
            alt="Chonk logo"
            className={styles.chonk_logo}
            src="/img/chonk_logo.svg"
            title="Chonk"
          />
          <HomeNavigation />
        </div>
        <HeroChonks />
      </section>
      <section className={styles.trailer}>
        <button type="button" name="Unmute Video" onClick={unmuteVideo}>
          <Image
            alt="Unmute Video Icon"
            height="48"
            src="/img/icons/icon_volume.svg"
            title="Unmute Video"
            width="48"
          />
        </button>
        <video
          autoPlay
          height="100%"
          id="trailer"
          loop
          muted
          playsInline
          width="100%"
        >
          <source src="/vid/chonk_trailer.webm" type="video/webm" />
          <source src="/vid/chonk_trailer.mp4" type="video/mp4" />
        </video>
      </section>
      <div id="clubs">
        <section id={styles.guardians}>
          <div className={styles.club_info_container}>
            <div className={styles.club_info_chonk_container}>
              <img
                alt="Chonk from the Guardians Club"
                className={styles.club_info_chonk}
                src="/img/chonk_guardian_half.webp"
                title="Guardian Chonk"
              />
            </div>
            <div className={styles.club_info}>
              <div className={styles.club_info_copy_container}>
                <div className={styles.club_info_chonk_container_m}>
                  <img
                    alt="Chonk from the Guardians Club"
                    className={styles.club_info_chonk}
                    src="/img/guardian.webp"
                    title="Guardian Chonk"
                  />
                </div>
                <img
                  alt="Guardians Club Logo"
                  className={styles.logo}
                  src="/img/chonks_club_guardians.svg"
                />
                <div className={styles.club_info_copy}>
                  <h1>Guardians</h1>
                  <p>
                    The Guardians club live in a modern civilization. Guardians
                    are the defenders of their fellow chonk. They have opted to
                    rely on math and science to develop their tech and armaments
                    in order to fight back against those who may want to
                    encroach on their way of living.
                  </p>
                </div>
              </div>
              <div className={styles.club_info_chonks}>
                <img
                  alt="Chonk from the Guardians Club"
                  src="/img/chonks/chonk_guardian_s_001.webp"
                />
                <img
                  alt="Chonk from the Guardians Club"
                  src="/img/chonks/chonk_guardian_s_002.webp"
                />
                <img
                  alt="Chonk from the Guardians Club"
                  src="/img/chonks/chonk_guardian_s_003.webp"
                />
                <img
                  alt="Chonk from the Guardians Club"
                  src="/img/chonks/chonk_guardian_s_004.webp"
                />
              </div>
            </div>
          </div>
        </section>
        {/* END Guardians */}
        <section id={styles.monsters}>
          <div className={styles.club_info_container}>
            <div className={styles.club_info}>
              <div className={styles.club_info_copy_container}>
                <div className={styles.club_info_chonk_container_m}>
                  <img
                    alt="Chonk from the Monsters Club"
                    className={styles.club_info_chonk}
                    src="/img/monster.webp"
                    title="Monster Chonk"
                  />
                </div>
                <img
                  alt="Monsters Club Logo"
                  className={styles.logo}
                  src="/img/chonks_club_monsters.svg"
                />
                <div className={styles.club_info_copy}>
                  <h1>Monsters</h1>
                  <p>
                    Dubbed by those residing in modern chonk society as a result
                    of their rugged, frightening appearances. Monsters are a
                    club of ancient, proud chonk. Living in the outskirts, they
                    operate mysteriously and have been known to attack without
                    warning, for unknown reasons.
                  </p>
                </div>
              </div>
              <div className={styles.club_info_chonks}>
                <img
                  alt="Chonk from the Monsters Club"
                  src="/img/chonks/chonk_monster_s_001.webp"
                />
                <img
                  alt="Chonk from the Monsters Club"
                  src="/img/chonks/chonk_monster_s_002.webp"
                />
                <img
                  alt="Chonk from the Monsters Club"
                  src="/img/chonks/chonk_monster_s_003.webp"
                />
                <img
                  alt="Chonk from the Monsters Club"
                  src="/img/chonks/chonk_monster_s_004.webp"
                />
              </div>
            </div>
            <div className={styles.club_info_chonk_container}>
              <img
                alt="Chonk from the Monsters Club"
                className={styles.club_info_chonk}
                src="/img/chonk_monster_half.webp"
                title="Monster Chonk"
              />
            </div>
          </div>
        </section>
        {/* END Monsters */}
      </div>
      <section id="team" className={styles.team}>
        <div className={styles.team_container}>
          <div className={styles.team_title_container}>
            <h2>Team</h2>
          </div>
          <div className={styles.team_members_container}>
            <TeamMembersList isFounders />
            <TeamMembersList />
          </div>
        </div>
        <div className={styles.team_bg_overlay}></div>
      </section>
      <footer id={styles.footer}>
        <div>
          <img
            alt="Group of Guardian Chonks"
            className={styles.footer_chonks}
            src="/img/footer_guardians.webp"
          />
        </div>
        <div>
          <img
            alt="Chonk Logo"
            className={styles.footer_logo}
            src="/img/chonk_logo.svg"
          />
          <p>
            COPYRIGHT CHONK ©{new Date().getFullYear()}. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div>
          <img
            alt="Group of Monster Chonks"
            className={styles.footer_chonks}
            src="/img/footer_monsters.webp"
          />
        </div>
      </footer>
    </main>
  );
};

Page.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page;
