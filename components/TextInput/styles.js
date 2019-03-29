import EStyleSheet from "react-native-extended-stylesheet";
const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
const styles = EStyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "90%",
    height: 48,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 11
  },
  containerDisabled: {
    backgroundColor: "red"
  },
  buttonContianer: {
    height: 48,
    alignHeight: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 16,
    color: "red"
  },
  input: {
    height: 48,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: "red"
  },
  border: {
    height: 48,
    backgrondColor: "red"
  }
});

export default styles;
