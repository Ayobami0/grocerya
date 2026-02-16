import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  slide: {
    width,
    paddingHorizontal: 30,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  slideTitle: {
    fontSize: 20,
    marginTop: 28,
    color: '#0D0D0D',
    fontFamily: 'Poppins-SemiBold',
  },
  slideContent: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    color: '#777777',
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
    backgroundColor: '#F2F2F3',
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: '#0D0D0D',
    width: 16,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 14,
  },
  skip: {
    backgroundColor: '#F2F2F3',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  next: {
    backgroundColor: '#0D0D0D',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
});
