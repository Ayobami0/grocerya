import { TextInput, TextInputProps, View } from "react-native";
import { globalStyles } from "@themes";

export default function StyledTextInput({ style, children, ...props }: TextInputProps) {
  return (
    <View style={[globalStyles.input]}>
      <TextInput style={[globalStyles.input, style]} {...props}>
        {children}
      </TextInput>
    </View>
  )
}
