import { Dimensions, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../common/theme';

export const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  continueBtn: {
    marginBottom: spacing.md,
    flex: 0,
  },
  progressBtn: {
    display: 'flex',
  },
  title: {
    ...typography.lg,
    ...typography.semiBold,
  },
  subtitle: {
    ...typography.base,
    ...typography.regular,
    color: colors.grey,
  },
  centerText: {
    textAlign: 'center',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
  },
  pageText: {
    marginHorizontal: 30
  },
  chipsContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
