import { Text, StyleSheet } from "react-native";
import { Props } from "../types";

const Title = ({ content }: Props) => {
  return <Text style={styles.title}>{content}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#5C704D",
  },
});
