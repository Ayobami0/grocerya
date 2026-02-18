import { StyleSheet, View } from "react-native";
import { QuestionMarkSVG } from "../svgs";
import { colors, radius } from "../theme";

export default function QuestionMark() {
  return <View style={styles.questionCircle}><QuestionMarkSVG /></View>
}

const styles = StyleSheet.create({
  questionCircle: {
    backgroundColor: colors.greyBasic,
    display: 'flex',
    borderRadius: radius.full,
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
})
