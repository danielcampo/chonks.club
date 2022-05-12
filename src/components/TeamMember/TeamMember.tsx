import Image from 'next/image';

import styles from './TeamMember.module.css';

interface Social {
  name: string;
  isCollection: boolean;
  url: string;
}

type ChonksClub = 'Guardians' | 'Monsters';

export interface MemberDetails {
  bio?: string;
  club: ChonksClub;
  isFounder?: boolean;
  name: string;
  social: Social[];
  title: string;
}

interface TeamMemberProps {
  memberDetails: MemberDetails;
}

const TeamMember = ({ memberDetails }: TeamMemberProps) => (
  <div
    className={`${styles.team_member} ${
      memberDetails.isFounder ? styles.founder : styles.community
    }`}
  >
    <div className={styles.team_member_avatar_container}>
      <img
        alt={`${memberDetails.name}'s ${memberDetails.club} avatar`}
        className={styles.team_member_avatar}
        src={`/img/team_${memberDetails.name.toLowerCase()}_avatar.webp`}
        title={`${memberDetails.name} Avatar`}
      />
      <div className={styles.team_member_social_container}>
        {memberDetails.social &&
          memberDetails.social.length &&
          memberDetails.social.map((social: Social) => {
            return (
              <a
                key={memberDetails.name}
                href={social.url}
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  alt={
                    social.isCollection
                      ? `View ${memberDetails.name}'s Collections on ${social.name}`
                      : `Follow ${memberDetails.name} on ${social.name}`
                  }
                  height="24"
                  src={`/img/icons/icon_${social.name.toLowerCase()}.svg`}
                  title={`${memberDetails.name} ${social.name}`}
                  width="24"
                />
              </a>
            );
          })}
      </div>
    </div>
    <div className={styles.team_member_copy}>
      <hgroup>
        <h3>{memberDetails.name}</h3>
        <h4>{memberDetails.title}</h4>
      </hgroup>
      {memberDetails.isFounder && <p>{memberDetails.bio}</p>}
    </div>
  </div>
);

export default TeamMember;
