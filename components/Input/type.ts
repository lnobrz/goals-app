import { TextInput } from "react-native";

export type Props = {
  textChangeHandler: (text: string) => void;
  placeholderText: string;
  componentRef?: React.RefObject<TextInput>;
};
