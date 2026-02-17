import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../common/theme';

export const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  slide: {
    width,
    paddingHorizontal: 30,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  slideTitle: {
    marginTop: 28,
    color: colors.black,
    ...typography.semiBold,
    ...typography.lg,
  },
  slideContent: {
    textAlign: 'center',
    marginTop: 8,
    color: colors.grey,
    ...typography.base,
  },
  indicatorRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
    marginHorizontal: 20,
  },
  dot: {
    borderRadius: 100,
    height: 3,
    flex: 1,
    backgroundColor: colors.greyAccent,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: colors.black,
    width: 16,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  scrollView: {
    flex: 1,
  },
});
