import { TextProps, Text } from "react-native";
import { typography } from "../theme";

export default function StyledText(props: TextProps) {
  const {style, ...others} = props;

  return <Text style={[typography.regular, style]} {...others}></Text>
} 
