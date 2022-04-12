import type { GetStaticProps, NextPage } from "next";
import { Team } from "../utils/ICricket";
import styles from "../styles/Teams.module.css";
import Head from "next/head";

interface Props {
  teams: Team[];
}

export const getStaticProps: GetStaticProps = async () => {
  const teams: Team[] = [
    { id: 1, name: "CSK", fullName: "Chennai Super Kings" },
    { id: 2, name: "DC", fullName: "Delhi Capitals" },
    { id: 3, name: "GT", fullName: "Gujarat Titans" },
    { id: 4, name: "KKR", fullName: "Kolkata Knight Riders" },
    { id: 5, name: "LSG", fullName: "Lucknow Super Giants" },
    { id: 6, name: "MI", fullName: "Mumbai Indians" },
    { id: 7, name: "PBKS", fullName: "Punjab Kings" },
    { id: 8, name: "RR", fullName: "Rajasthan Royals" },
    { id: 9, name: "RCB", fullName: "Royal Challengers Bangalore" },
    { id: 10, name: "SRH", fullName: "Sunrisers Hyderabad" }
  ];

  return {
    props: { teams }
  };
};

const Teams: NextPage<Props> = ({ teams }: Props) => {
  return (
    <div>
      <Head>
        <title>Teams Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <table className={styles.teamstable}>
        <caption>IPL Teams List</caption>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Short Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.fullName}</td>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
