import { View, StyleSheet } from "react-native";
import GoalsSection from "./GoalsSection";
import { GoalsContext } from "../../store/context/goals/GoalsContext";
import { useContext } from "react";
import InputSection from "./InputSection";

const Home = () => {
  const goalsContext = useContext(GoalsContext);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <InputSection />
      </View>
      <View style={styles.goalsContainer}>
        <GoalsSection GoalList={goalsContext.goals} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    gap: 30,
  },
  inputContainer: {
    width: "100%",
  },
  goalsContainer: {
    width: "100%",
    height: "70%",
    borderRadius: 10,
    gap: 30,
  },
});
