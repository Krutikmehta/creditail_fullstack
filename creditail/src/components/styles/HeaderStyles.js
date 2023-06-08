import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#2A2D31',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backImage: {width: 16, aspectRatio: 1, marginLeft: 16},
  childView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;
