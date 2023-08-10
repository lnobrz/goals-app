import { ReactNode } from "react";

export type props = {
  children: ReactNode;
};

export type Goal = {
  id: string;
  name: string;
};

export type addGoalHandler = (goalName: string) => void;

export type removeGoalHandler = (goalName: string) => void;

export type GoalList = Goal[];
