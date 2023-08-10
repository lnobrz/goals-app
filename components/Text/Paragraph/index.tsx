import { Text, StyleSheet } from "react-native";
import { Props } from "../types";

const Paragraph = ({ content, additionalStyles }: Props) => {
  return (
    <Text style={{ ...styles.title, ...additionalStyles }}>{content}</Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
  },
});
