import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { radius, spacing } from './spacing';
import { typography } from './typography';

export const globalStyles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: colors.black,
    borderRadius: 100,
    color: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  btnSecondary: {
    backgroundColor: colors.greyAccent,
    borderRadius: 100,
    color: colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  input: {
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    backgroundColor: colors.greyAccent,
    color: colors.grey,
    ...typography.base,
  },
  screen: {
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.white,
    height: '100%',
  },
  container: {
    display: 'flex',
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
