import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { globalStyles, typography } from "../theme";
import { ButtonVariant } from "../types";
import StyledText from "./StyledText";


const btnMap = {
  'primary': globalStyles.btnPrimary,
  'secondary': globalStyles.btnSecondary,
}

export default function StyledButton({ variant = "primary", ...props }: { variant?: ButtonVariant, style?: StyleProp<TextStyle>, children: string, onPress?: () => void }) {
  const { style, children, ...others } = props;

  const variantStyle = btnMap[variant];
  return (
    <TouchableOpacity style={[variantStyle, style as ViewStyle]} {...others}>
      <StyledText style={[typography.medium, typography.base, { color: variantStyle.color }]} {...others}>{children}</StyledText>
    </TouchableOpacity>
  );
} 
