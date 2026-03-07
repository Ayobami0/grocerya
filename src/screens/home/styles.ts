import {globalStyles, radius} from '@themes';
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
  profileAvatar: {
    borderRadius: 2000,
    width: 40,
    height: 40,
    backgroundColor: '#000',
  }
});
