import styles from '../styles/home.navigation.module.css';

const HomeNavigation = () => {
  return (
    <nav className={styles.home_navigation}>
      <ul>
        <li>
          <a
            href="#clubs"
            onClick={(e) => {
              e.preventDefault();
              const clubs = document.getElementById('clubs');
              clubs?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Clubs
          </a>
        </li>
        <li>
          <a
            href="#team"
            onClick={(e) => {
              e.preventDefault();
              const team = document.getElementById('team');
              team?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Team
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/chonksclub"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Join the Chonk Discord"
              height="28"
              src="/img/icons/icon_discord.svg"
              title="Chonk Discord"
              width="28"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ChonkNFT"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Follow Chonk on Twitter"
              height="28"
              src="/img/icons/icon_twitter.svg"
              title="Chonk Twitter"
              width="28"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNavigation;
