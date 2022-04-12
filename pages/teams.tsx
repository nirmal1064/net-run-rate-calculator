import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { prisma } from "../db";
import styles from "../styles/Teams.module.css";
import { Team } from "../utils/ICricket";

interface Props {
  teams: Team[];
}

export const getStaticProps: GetStaticProps = async () => {
  const teams = await prisma.teams.findMany();
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
