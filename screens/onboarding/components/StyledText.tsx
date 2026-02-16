import { TextProps, Text } from "react-native";
import { styles } from "../styles";

export default function StyledText(props: TextProps) {
  const {style, ...others} = props;

  return <Text style={[styles.text, style]} {...others}></Text>
} 
