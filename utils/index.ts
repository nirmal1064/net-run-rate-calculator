import { iplTeams } from "../data/teams";
import { Option } from "../types";

export const resultDefault = {
  season: 2022,
  matchNumber: 0,
  teamA: 0,
  teamB: 0,
  scoreA: 0,
  scoreB: 0,
  oversA: 0,
  oversB: 0,
  maxOversA: 0,
  maxOversB: 0,
  allOutA: false,
  allOutB: false,
  oversAFinal: 0,
  oversBFinal: 0,
  ballsAFinal: 0,
  ballsBFinal: 0,
  winner: 0,
  dlApplied: false,
  noResult: false,
  tie: false
};

export const populateTeams = (): Option[] => {
  return iplTeams.map((team) => {
    return { value: team.id, label: team.name };
  });
};
