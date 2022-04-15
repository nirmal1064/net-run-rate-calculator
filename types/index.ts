import { ChangeEvent } from "react";

type Props = {
  htmlFor: string;
  label: string;
  name: string;
  id: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export type CheckBoxProps = Props & { className?: string };

export type InputProps = Props & {
  className?: string;
  type: string;
  placeholder?: string;
};

type Option = { value: string; label: string };

export type SelectProps = Props & { options: Option[] };

export type Team = {
  id: number;
  name: string;
  fullName: string;
};

export type Result = {
  season: number;
  matchNumber: number;
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
  dlApplied: boolean;
  noResult: boolean;
  tie: boolean;
};

export type PointsTable = {
  season: number;
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
};

export type ICricketState = {
  teams: Team[];
  results: Result[];
  pointsTable: PointsTable[];
};
