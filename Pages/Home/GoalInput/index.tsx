import Input from "../../../components/Input";
import { useState, useContext, useRef } from "react";
import { GoalsContext } from "../../../store/context/goals/GoalsContext";
import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { formatTextInput } from "../../../helpers/textFormat";

const GoalInput = () => {
  const goalsContext = useContext(GoalsContext);
  const [currentGoal, setCurrentGoal] = useState("");
  const inputRef = useRef<TextInput>(null);

  const updateGoal = (enteredText: string) => {
    setCurrentGoal(() => formatTextInput(enteredText));
  };

  const addToGoalList = () => {
    if (currentGoal.length > 0) {
      goalsContext.addGoal(currentGoal);
      inputRef.current?.clear();
      setCurrentGoal((currentValue) => "");
    }
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Input
        textChangeHandler={updateGoal}
        placeholderText=""
        componentRef={inputRef}
      />
      <CustomButton Content="Add Goal" PressHandler={addToGoalList} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 15,
  },
});
