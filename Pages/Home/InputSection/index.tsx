import Title from "../../../components/Text/Title";
import GoalInput from "../GoalInput";
import { View, StyleSheet } from "react-native";
import Paragraph from "../../../components/Text/Paragraph";

const InputSection = () => {
  return (
    <View>
      <Title content="Goals App" />
      <Paragraph
        content="Type a goal on the input bellow and press the 'add goal' button"
        additionalStyles={styles.paragraph}
      />
      <GoalInput />
    </View>
  );
};

export default InputSection;

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 10,
    marginBottom: 50,
  },
});
