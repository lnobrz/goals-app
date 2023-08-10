import { View, StyleSheet, ScrollView } from "react-native";
import GoalsContextProvider from "./store/context/goals/GoalsContext";
import Home from "./Pages/Home";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const App = () => {
  return (
    <GoalsContextProvider>
      <View style={styles.container}>
        <ExpoStatusBar style="light" />
        <Home />
      </View>
    </GoalsContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
    paddingTop: 50,
  },
});
