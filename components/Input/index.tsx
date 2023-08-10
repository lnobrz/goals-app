import { TextInput, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Props } from "./type";

const Input = ({ textChangeHandler, placeholderText, componentRef }: Props) => {
  return (
    <TouchableWithoutFeedback>
      <TextInput
        onChangeText={textChangeHandler}
        placeholder={placeholderText}
        style={styles.input}
        ref={componentRef}
      />
    </TouchableWithoutFeedback>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    paddingLeft: 15,
    color: "white",
  },
});
