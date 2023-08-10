import { View } from "react-native";
import Title from "../../../components/Text/Title";
import GoalsTab from "../GoalsTab";
import { Props } from "./types";

const GoalsSection = ({ GoalList }: Props) => {
  return (
    <View>
      <Title content="Goals List" />
      <GoalsTab GoalList={GoalList} />
    </View>
  );
};

export default GoalsSection;
