export interface Team {
  id: number;
  name: string;
  fullName: string;
}

export interface Result {
  teamA: number;
  teamB: number;
  scoreA: number;
  scoreB: number;
  oversA: number;
  oversB: number;
  maxOversA: number;
  maxOversB: number;
  allOutA: boolean;
  allOutB: boolean;
  oversAFinal: number;
  oversBFinal: number;
  ballsAFinal: number;
  ballsBFinal: number;
  winner: number;
}

export interface PointsTable {
  position: number;
  teamId: number;
  teamName: string;
  matches: number;
  wins: number;
  losses: number;
  ties: number;
  points: number;
  runsFor: number;
  ballsFor: number;
  oversFor: number;
  runsAgainst: number;
  ballsAgainst: number;
  oversAgainst: number;
  netRunRate: number;
}

export interface ICricketState {
  teams: Team[];
  results: Result[];
  pointsTable: PointsTable[];
}
