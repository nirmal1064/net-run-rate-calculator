import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { results } from "../data/results";
import { iplTeams } from "../data/teams";
import styles from "../styles/Teams.module.css";
import { PointsTable } from "../types";
import { generatePointsTable } from "../utils/calculator";

interface Props {
  pointsTable: PointsTable[];
}

export const getStaticProps: GetStaticProps = async () => {
  const pointsTable: PointsTable[] = generatePointsTable(iplTeams, results, []);
  return {
    props: { pointsTable }
  };
};

const PtsTable: NextPage<Props> = ({ pointsTable }: Props) => {
  return (
    <div>
      <Head>
        <title>IPL Points Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <table className={styles.teamstable}>
        <caption>IPL Points Table</caption>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Team</th>
            <th>Mats</th>
            <th>Won</th>
            <th>Lost</th>
            <th>RunsFor</th>
            <th>BallsFor</th>
            <th>RunsAgainst</th>
            <th>BallsAgainst</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {pointsTable.map((row) => (
            <tr key={row.position}>
              <td>{row.position}</td>
              <td>{row.teamName}</td>
              <td>{row.matches}</td>
              <td>{row.wins}</td>
              <td>{row.losses}</td>
              <td>{row.runsFor}</td>
              <td>{row.ballsFor}</td>
              <td>{row.runsAgainst}</td>
              <td>{row.ballsAgainst}</td>
              <td>{row.points}</td>
              <td>{row.netRunRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PtsTable;
