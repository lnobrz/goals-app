import { createContext, useState } from "react";
import {
  Goal,
  GoalList,
  addGoalHandler,
  props,
  removeGoalHandler,
} from "./types";

export const GoalsContext = createContext<{
  goals: GoalList;
  addGoal: addGoalHandler;
  removeGoal: removeGoalHandler;
}>({ goals: [{ id: "", name: "" }], addGoal: () => {}, removeGoal: () => {} });

const GoalsContextProvider = ({ children }: props) => {
  const [goalsList, setGoalsList] = useState<GoalList>([]);
  const addGoal = (goalName: string) => {
    setGoalsList((currentGoalsList: GoalList) => [
      ...currentGoalsList,
      { id: Math.random().toString(), name: goalName },
    ]);
  };
  const removeGoal = (goalId: string) => {
    setGoalsList((currentGoalsList: GoalList) =>
      currentGoalsList.filter((goal) => goal.id !== goalId)
    );
  };

  const values = {
    goals: goalsList,
    addGoal: addGoal,
    removeGoal: removeGoal,
  };

  return (
    <GoalsContext.Provider value={values}>{children}</GoalsContext.Provider>
  );
};

export default GoalsContextProvider;
