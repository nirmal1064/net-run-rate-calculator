import type { PointsTable, Result, Team } from "../types";

export const generatePointsTable = (
  teams: Team[],
  results: Result[],
  pointsTable: PointsTable[]
): PointsTable[] => {
  for (const result of results) {
    if (result.noResult) {
      continue;
    }
    if (result.allOutA) {
      result.oversAFinal = result.maxOversA;
    }
    if (result.allOutB) {
      result.oversBFinal = result.maxOversB;
    }
    result.ballsAFinal = convertOversToBalls(result.oversAFinal);
    result.ballsBFinal = convertOversToBalls(result.oversBFinal);
    const tie =
      result.winner !== result.teamA && result.winner !== result.teamB;
    const teamA: Team = teams.find((team) => team.id === result.teamA)!;
    const teamB: Team = teams.find((team) => team.id === result.teamB)!;
    const pointsTableA = pointsTable.find((pts) => pts.teamId === teamA.id);
    const pointsTableB = pointsTable.find((pts) => pts.teamId === teamB.id);
    if (!pointsTableA) {
      pointsTable.push(getPoinstTableANew(teamA, result, tie));
    } else {
      getPointsTableA(pointsTableA, result, tie);
    }
    if (!pointsTableB) {
      pointsTable.push(getPointsTableBNew(teamB, result, tie));
    } else {
      getPointsTableB(pointsTableB, result, tie);
    }
  }
  sortPointsTable(pointsTable);
  return pointsTable;
};

const convertOversToBalls = (overs: number): number => {
  const split = overs.toString().split(".");
  if (split.length === 1) {
    return overs * 6;
  } else if (split.length === 2) {
    return parseInt(split[0]) * 6 + parseInt(split[1]);
  }
  return NaN;
};

const convertBallsToOvers = (balls: number): number => {
  const completedOvers = Math.floor(balls / 6);
  const ballsReamining = balls % 6;
  const overs = completedOvers + ballsReamining * 0.1;
  return Number(overs.toFixed(1));
};

const calculateNRR = (
  runsFor: number,
  ballsFor: number,
  runsAgainst: number,
  ballsAgainst: number
): number => {
  const runRateFor = runsFor / ballsFor;
  const runRateAgainst = runsAgainst / ballsAgainst;
  const nrr = (runRateFor - runRateAgainst) * 6;
  return Number(nrr.toFixed(3));
};

const getPoints = (tie: boolean): number => {
  if (tie) {
    return 1;
  } else {
    return 0;
  }
};

const getPoinstTableANew = (
  team: Team,
  result: Result,
  tie: boolean
): PointsTable => {
  return {
    season: 2022,
    position: 0,
    teamId: team.id,
    teamName: team.name,
    matches: 1,
    wins: result.winner === result.teamA ? 1 : 0,
    losses: !tie && result.winner !== result.teamA ? 1 : 0,
    ties: tie ? 1 : 0,
    points: result.winner === result.teamA ? 2 : getPoints(tie),
    runsFor: result.scoreA,
    ballsFor: result.ballsAFinal,
    oversFor: result.oversAFinal,
    runsAgainst: result.scoreB,
    ballsAgainst: result.ballsBFinal,
    oversAgainst: result.oversBFinal,
    netRunRate: calculateNRR(
      result.scoreA,
      result.ballsAFinal,
      result.scoreB,
      result.ballsBFinal
    )
  };
};

const getPointsTableBNew = (
  teamB: Team,
  result: Result,
  tie: boolean
): PointsTable => {
  return {
    season: 2022,
    position: 0,
    teamId: teamB.id,
    teamName: teamB.name,
    matches: 1,
    wins: result.winner === result.teamB ? 1 : 0,
    losses: !tie && result.winner !== result.teamB ? 1 : 0,
    ties: tie ? 1 : 0,
    points: result.winner === result.teamB ? 2 : getPoints(tie),
    runsFor: result.scoreB,
    ballsFor: result.ballsBFinal,
    oversFor: result.oversBFinal,
    runsAgainst: result.scoreA,
    ballsAgainst: result.ballsAFinal,
    oversAgainst: result.oversAFinal,
    netRunRate: calculateNRR(
      result.scoreB,
      result.ballsBFinal,
      result.scoreA,
      result.ballsAFinal
    )
  };
};

const getPointsTableA = (
  pointsTableA: PointsTable,
  result: Result,
  tie: boolean
) => {
  pointsTableA.matches += 1;
  pointsTableA.wins += result.winner === result.teamA ? 1 : 0;
  pointsTableA.losses += !tie && result.winner !== result.teamA ? 1 : 0;
  pointsTableA.ties += tie ? 1 : 0;
  pointsTableA.points += result.winner === result.teamA ? 2 : getPoints(tie);
  pointsTableA.runsFor += result.scoreA;
  pointsTableA.ballsFor += result.ballsAFinal;
  pointsTableA.oversFor = convertBallsToOvers(pointsTableA.ballsFor);
  pointsTableA.runsAgainst += result.scoreB;
  pointsTableA.ballsAgainst += result.ballsBFinal;
  pointsTableA.oversAgainst = convertBallsToOvers(pointsTableA.ballsAgainst);
  pointsTableA.netRunRate = calculateNRR(
    pointsTableA.runsFor,
    pointsTableA.ballsFor,
    pointsTableA.runsAgainst,
    pointsTableA.ballsAgainst
  );
};

const getPointsTableB = (
  pointsTableB: PointsTable,
  result: Result,
  tie: boolean
) => {
  pointsTableB.matches += 1;
  pointsTableB.wins += result.winner === result.teamB ? 1 : 0;
  pointsTableB.losses += !tie && result.winner !== result.teamB ? 1 : 0;
  pointsTableB.ties += tie ? 1 : 0;
  pointsTableB.points += result.winner === result.teamB ? 2 : getPoints(tie);
  pointsTableB.runsFor += result.scoreB;
  pointsTableB.ballsFor += result.ballsBFinal;
  pointsTableB.oversFor = convertBallsToOvers(pointsTableB.ballsFor);
  pointsTableB.runsAgainst += result.scoreA;
  pointsTableB.ballsAgainst += result.ballsAFinal;
  pointsTableB.oversAgainst = convertBallsToOvers(pointsTableB.ballsAgainst);
  pointsTableB.netRunRate = calculateNRR(
    pointsTableB.runsFor,
    pointsTableB.ballsFor,
    pointsTableB.runsAgainst,
    pointsTableB.ballsAgainst
  );
};

const sortPointsTable = (pointsTable: PointsTable[]): void => {
  pointsTable.sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    } else if (a.wins !== b.wins) {
      return b.wins - a.wins;
    } else {
      return b.netRunRate - a.netRunRate;
    }
  });
  for (const row of pointsTable) {
    row.position = pointsTable.indexOf(row) + 1;
  }
};
