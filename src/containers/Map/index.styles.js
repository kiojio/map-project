import { StyleSheet } from 'react-native';
import { WHITE_COLOR, BLACK_COLOR, WINDOW_WIDTH, WINDOW_HEIGHT, SOFTGRAY_COLOR } from '../../styles';

const widthCard = 0.8;
const heightToggle = 0.18;
const heightNear = 0.25;
const heightSearch = 0.027;
const heightContentSearch = 0.1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  containerScroll: {
    backgroundColor: WHITE_COLOR,
    paddingHorizontal: 24,
  },
  map: {
    flex: 1
  },
  inputContainer: {
    zIndex: 10,
    position: 'absolute',
    top: WINDOW_HEIGHT * heightSearch,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: WHITE_COLOR,
    height: 50,
    borderRadius: 8,
    marginBottom: 16,
    width: WINDOW_WIDTH * widthCard,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    padding: 8,
    backgroundColor: WHITE_COLOR,
    color: BLACK_COLOR,
  },
  searchCard: {
    alignSelf: 'center',
    zIndex: 15,
    position: 'absolute',
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    width: WINDOW_WIDTH * widthCard,
    top: WINDOW_HEIGHT * heightContentSearch
  },
  contentSearch: {
    flex: 1,
    padding: 10
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  btnToggle: {
    backgroundColor: "transparent",
    position: 'absolute',
    top: WINDOW_HEIGHT * heightToggle,
    right: 10,
    backgroundColor: WHITE_COLOR,
    padding: 10,
    borderRadius: 30,
    zIndex: 10,
  },
  btnNear: {
    backgroundColor: "transparent",
    position: 'absolute',
    top: WINDOW_HEIGHT * heightNear,
    right: 10,
    backgroundColor: WHITE_COLOR,
    padding: 10,
    borderRadius: 30,
    zIndex: 10,
  },
  card: {
    alignSelf: 'center',
    zIndex: 10,
    position: 'absolute',
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    width: WINDOW_WIDTH * widthCard,
    height: 100,
    bottom: 40
  },
  contentCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  }
});

export default styles;
