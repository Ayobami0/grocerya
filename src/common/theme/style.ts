import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { radius, spacing } from './spacing';

export const globalStyles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: colors.black,
    borderRadius: radius.full,
    color: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  btnSecondary: {
    backgroundColor: colors.greyAccent,
    borderRadius: radius.full,
    color: colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
});
