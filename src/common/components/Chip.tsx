import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { colors, typography } from "../theme";
import StyledText from "./StyledText";

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function Chip({ label, active = false, onPress }: ChipProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chip, active && styles.activeChip]}
      activeOpacity={0.8}
    >
      <StyledText style={[styles.text, active && styles.activeText]}>
        {label}
      </StyledText>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  chip: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: colors.greyAccent,
  },
  activeChip: {
    backgroundColor: "#1ED7001A",
    borderColor: colors.green,
    borderWidth: 1.5
  },
  text: {
    ...typography.medium,
    ...typography.base
  },
  activeText: {
    ...typography.medium,
    ...typography.base
  },
});


