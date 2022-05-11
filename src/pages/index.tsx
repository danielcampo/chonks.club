import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Image from 'next/image';

import MainLayout from '../components/layout.main';
import HomeNavigation from '../components/home.navigation';
import HeroChonks from '../components/home.heroChonks';

import styles from '../styles/home.module.css';

const Page = () => {
  const [trailerMuted, setTrailerMuted] = useState(true);

  useEffect(() => {
    const parallax = (e: MouseEvent) => {
      const hero = document.getElementById(styles.hero);
      document.querySelectorAll<HTMLElement>('.chonk').forEach((layer) => {
        const offset = layer.getAttribute('data-offset') ?? '1';
        const offsetNum = parseInt(offset);
        const normX = 150;
        const normY = 120;
        const pageX = e.pageX;
        const pageY = e.pageY;
        const wInnerHeight = window.innerHeight;
        const wInnerWidth = window.innerWidth;

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

        if (pageX <= wInnerWidth * 0.96 && pageY <= wInnerHeight * 0.96) {
          const y = (wInnerHeight - pageY * offsetNum) / normY;
          let x;

          if (club === 'guardian') {
            x = (wInnerWidth - pageX * offsetNum) / normX;
          } else {
            x = (wInnerWidth - (pageX / 2) * offsetNum) / normX;
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
            height="24"
            src="/img/icons/icon_volume.svg"
            title="Unmute Video"
            width="24"
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
          <div className={styles.team_member_container}>
            <div className={styles.team_member_founders}>
              <div className={styles.team_member}>
                <div className={styles.team_member_avatar_container}>
                  <img
                    alt="Grumpii's monster avatar"
                    className={styles.team_member_avatar}
                    src="/img/team_grumpii_avatar.webp"
                    title="Grumpii Avatar"
                  />
                  <div className={styles.team_member_social_container}>
                    <a
                      href="https://twitter.com/GrumpiiArt"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Image
                        alt="Follow Grumpii on Twitter"
                        height="24"
                        src="/img/icons/icon_twitter.svg"
                        title="Grumpii Twitter"
                        width="24"
                      />
                    </a>
                    <a
                      href="https://opensea.io/Grumpii?tab=created"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Image
                        alt="View Grumpii's OpenSea Collections"
                        height="24"
                        src="/img/icons/icon_opensea.svg"
                        title="Grumpii OpenSea"
                        width="24"
                      />
                    </a>
                    <a
                      href="https://rarible.com/grumpiiart/created"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Image
                        alt="View Grumpii's Rarible Collections"
                        height="24"
                        src="/img/icons/icon_rarible.svg"
                        title="Grumpii Rarible"
                        width="24"
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.team_member_copy}>
                  <hgroup>
                    <h3>Grumpii</h3>
                    <h4>Founder & Lead Artist</h4>
                  </hgroup>
                  <p>
                    A designer toy creator, as well as a 3D and traditional 2D
                    artist. I’ve always loved cute, chibi, chonky, creatures
                    with attitude, hence where my Grumpii persona was born from.
                    I’m super into dinosaurs; T. rex and Carnotaurus are my all
                    time favorite. My dream is to have my own toy line one day,
                    so I continue to design and expand my own little Grumpii
                    world. It’s such a joy to bring my imagination to life, and
                    I’d love to bring that joy to everyone with my creations.
                  </p>
                </div>
              </div>
              <div className={styles.team_member}>
                <div className={styles.team_member_avatar_container}>
                  <img
                    alt="epiksol's guardians avatar"
                    className={styles.team_member_avatar}
                    src="/img/team_epiksol_avatar.webp"
                    title="epiksol Avatar"
                  />
                  <div className={styles.team_member_social_container}>
                    <a
                      href="https://twitter.com/epiksol"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Image
                        alt="Follow epiksol on Twitter"
                        height="24"
                        src="/img/icons/icon_twitter.svg"
                        title="epiksol Twitter"
                        width="24"
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.team_member_copy}>
                  <hgroup>
                    <h3>epiksol</h3>
                    <h4>Founder & Lead Dev</h4>
                  </hgroup>
                  <p>
                    A professional software engineer for over a decade and even
                    longer as a hobby. Serving as both individual contributor,
                    and more recently, leading multidisciplinary teams
                    responsible for high profile, highly scalable production
                    applications for large companies. Prior to engineering as my
                    primary role, I was involved in a number of graphic design
                    roles for nearly a decade as well as roles with primary
                    focuses on marketing and business development.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.team_member_community}>
              <div className={styles.team_member}>
                <div className={styles.team_member_avatar_container}>
                  <img
                    alt="Mechnuggets' avatar"
                    className={styles.team_member_avatar}
                    src="/img/team_mechnuggets_avatar.webp"
                    title="Mechnuggets Avatar"
                  />
                </div>
                <div>
                  <hgroup>
                    <h5>Mechnuggets</h5>
                    <h6>Project Advisor</h6>
                    <div className={styles.team_member_social_container}>
                      <a
                        href="https://twitter.com/mechnuggets"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Image
                          alt="Follow Mechnuggets on Twitter"
                          height="24"
                          src="/img/icons/icon_twitter.svg"
                          title="Mechnuggets Twitter"
                          width="24"
                        />
                      </a>
                      <a
                        href="https://opensea.io/mechnuggets?tab=created"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Image
                          alt="View MechNuggets' OpenSea Collections"
                          height="24"
                          src="/img/icons/icon_opensea.svg"
                          title="Mechnuggets OpenSea"
                          width="24"
                        />
                      </a>
                      <a
                        href="https://rarible.com/mechnuggets/created"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Image
                          alt="View MechNuggets' Rarible Collections"
                          height="24"
                          src="/img/icons/icon_rarible.svg"
                          title="Mechnuggets Rarible"
                          width="24"
                        />
                      </a>
                    </div>
                  </hgroup>
                </div>
              </div>
              <div className={styles.team_member}>
                <div className={styles.team_member_avatar_container}>
                  <img
                    alt="Redefined's avatar"
                    className={styles.team_member_avatar}
                    src="/img/team_redefined_avatar.webp"
                    title="Redefined's Avatar"
                  />
                </div>
                <div>
                  <hgroup>
                    <h5>ReDeFined</h5>
                    <h6>Community Mod</h6>
                    <div className={styles.team_member_social_container}>
                      <a
                        href="https://twitter.com/ReDeFined456"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Image
                          alt="Follow ReDeFined on Twitter"
                          height="24"
                          src="/img/icons/icon_twitter.svg"
                          title="ReDeFined's Twitter"
                          width="24"
                        />
                      </a>
                    </div>
                  </hgroup>
                </div>
              </div>
              <div className={styles.team_member}>
                <div className={styles.team_member_avatar_container}>
                  <img
                    alt="DrWindu's avatar"
                    className={styles.team_member_avatar}
                    src="/img/team_drwindu_avatar.webp"
                    title="DrWindu's Avatar"
                  />
                </div>
                <div>
                  <hgroup>
                    <h5>DrWindu</h5>
                    <h6>Community Mod</h6>
                    <div className={styles.team_member_social_container}>
                      <a
                        href="https://twitter.com/drwindu69"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Image
                          alt="Follow DrWindu on Twitter"
                          height="24"
                          src="/img/icons/icon_twitter.svg"
                          title="DrWindu's Twitter"
                          width="24"
                        />
                      </a>
                    </div>
                  </hgroup>
                </div>
              </div>
            </div>
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
