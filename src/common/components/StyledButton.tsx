import { StyleSheetProperties, Text, TouchableOpacity, ViewStyle } from "react-native";
import { globalStyles, typography } from "../theme";
import { ButtonVariant } from "../types";


const btnMap = {
  'primary': globalStyles.btnPrimary,
  'secondary': globalStyles.btnSecondary,
}

export default function StyledButton({ variant = "primary", ...props }: { variant?: ButtonVariant, style?: StyleSheetProperties, children: string, onPress: () => void }) {
  const { style, ...others } = props;

  const variantStyle = btnMap[variant];
  return (
    <TouchableOpacity style={[variantStyle, style as ViewStyle]} {...others}>
      <Text style={[typography.medium, typography.base, { color: variantStyle.color }]} {...others}></Text>
    </TouchableOpacity>
  );
} 
