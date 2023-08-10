import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Props } from "./types";
import { useContext } from "react";
import { GoalsContext } from "../../../store/context/goals/GoalsContext";

const GoalsTab = ({ GoalList }: Props) => {
  const goalsContext = useContext(GoalsContext);

  const removeGoal = (goalId: string) => {
    goalsContext.removeGoal(goalId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={GoalList}
        renderItem={(goal) => {
          return (
            <Pressable
              style={styles.pressable}
              android_ripple={{ color: "#E0E0E0" }}
              onLongPress={removeGoal.bind(this, goal.item.id.toString())}
            >
              <Text
                id={goal.item.id.toString()}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {goal.item.name}
              </Text>
            </Pressable>
          );
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default GoalsTab;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  pressable: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    backgroundColor: "white",
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    maxHeight: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});
