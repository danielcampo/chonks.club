import TeamMember, { MemberDetails } from '../TeamMember/TeamMember';

import styles from './TeamMembersList.module.css';

const founders: MemberDetails[] = [
  {
    name: 'Grumpii',
    bio: 'A designer toy creator, as well as a 3D and traditional 2D artist. I’ve always loved cute, chibi, chonky, creatures with attitude, hence where my Grumpii persona was born from. I’m super into dinosaurs; T. rex and Carnotaurus are my all time favorite. My dream is to have my own toy line one day, so I continue to design and expand my own little Grumpii world. It’s such a joy to bring my imagination to life, and I’d love to bring that joy to everyone with my creations.',
    club: 'Monsters',
    isFounder: true,
    social: [
      {
        name: 'Twitter',
        isCollection: false,
        url: 'https://twitter.com/GrumpiiArt',
      },
      {
        name: 'OpenSea',
        isCollection: true,
        url: 'https://opensea.io/Grumpii?tab=created',
      },
      {
        name: 'Rarible',
        isCollection: true,
        url: 'https://rarible.com/grumpiiart/created',
      },
    ],
    title: 'Founder & Lead Artist',
  },
  {
    name: 'epiksol',
    bio: 'A professional software engineer for over a decade and even longer as a hobby. Serving as both individual contributor, and more recently, leading multidisciplinary teams responsible for high profile, highly scalable production applications for large companies. Prior to engineering as my primary role, I was involved in a number of graphic design roles for nearly a decade as well as roles with primary focuses on marketing and business development.',
    club: 'Guardians',
    isFounder: true,
    social: [
      {
        name: 'Twitter',
        isCollection: false,
        url: 'https://twitter.com/epiksol',
      },
    ],
    title: 'Founder & Lead Engineer',
  },
];

const communityMembers: MemberDetails[] = [
  {
    name: 'MechNuggets',
    club: 'Monsters',
    social: [
      {
        name: 'Twitter',
        isCollection: false,
        url: 'https://twitter.com/MechNuggets',
      },
      {
        name: 'OpenSea',
        isCollection: true,
        url: 'https://opensea.io/MechNuggets?tab=created',
      },
      {
        name: 'Rarible',
        isCollection: true,
        url: 'https://rarible.com/MechNuggets/created',
      },
    ],
    title: 'Project Advisor',
  },
  {
    name: 'ReDeFined',
    club: 'Guardians',
    isFounder: false,
    social: [
      {
        name: 'Twitter',
        isCollection: false,
        url: 'https://twitter.com/ReDeFined456',
      },
    ],
    title: 'Community Mod',
  },
  {
    name: 'DrWindu',
    club: 'Guardians',
    isFounder: false,
    social: [
      {
        name: 'Twitter',
        isCollection: false,
        url: 'https://twitter.com/DrWindu69',
      },
    ],
    title: 'Community Mod',
  },
];

const TeamMemberList = ({ isFounders }: { isFounders?: boolean }) => {
  const members = isFounders ? founders : communityMembers;
  return (
    <div
      className={`${
        isFounders
          ? styles.team_member_founders_container
          : styles.team_member_community_container
      }`}
    >
      {members.map((memberDetails) => (
        <TeamMember key={memberDetails.name} memberDetails={memberDetails} />
      ))}
    </div>
  );
};

export default TeamMemberList;
