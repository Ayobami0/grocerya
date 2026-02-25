import { globalStyles } from '@themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navBarContainer: {
    paddingVertical: 20,
    paddingHorizontal: 36,
  },
  screenContent: {
    flex: 1,
  },
  screen: {
    ...globalStyles.screen,
    display: 'flex',
  },
});
