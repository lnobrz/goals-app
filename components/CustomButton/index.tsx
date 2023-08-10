import { Props } from "./types";
import { View, Pressable, Text, StyleSheet } from "react-native";

const CustomButton = ({ Content, PressHandler }: Props) => {
  return (
    <View>
      <Pressable onPress={PressHandler} style={styles.button}>
        <Text style={styles.text}>{Content}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5C704D",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
  },
});
