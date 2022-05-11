import { StyleSheet } from 'react-native';
import { WHITE_COLOR, SOFTGRAY_COLOR } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  containerScroll: {
    backgroundColor: WHITE_COLOR,
    paddingHorizontal: 24,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 12,
  },
  info: {
    flexDirection: 'row',
    marginLeft: 5,
    margin: 10,
  },
  wrapText: {
    flex: 1,
  },
  border: {
    marginTop: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: SOFTGRAY_COLOR,
  },
});

export default styles;
