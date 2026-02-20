import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@themes';

export const styles = StyleSheet.create({
  continueBtn: {
    marginBottom: spacing.md,
    flex: 0,
  },
  title: {
    ...typography.lg,
    ...typography.semiBold,
  },
  subtitle: {
    ...typography.base,
    ...typography.regular,
    color: colors.grey,
    marginBottom: spacing.md,
  },
  phoneNumberText: {
    ...typography.sm,
    ...typography.medium,
  },
  phoneText: {
    ...typography.base,
    ...typography.semiBold,
  },
  pinContainer: {
    gap: 0
  },
  singlePinContainer: {
    width: 63,
    height: 63,
    borderColor: colors.greyAccent,
    backgroundColor: colors.greyAccent
  },
  pinText: {
    ...typography.regular,
    color: colors.black
  }
});
