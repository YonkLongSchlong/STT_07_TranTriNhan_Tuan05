import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    flexShrink: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  productText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  chooseColorSection: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  chooseColorText: {
    fontWeight: "bold",
    paddingHorizontal: 20,
    fontSize: 14,
  },
  chooseColorContainer: {
    marginVertical: 20,
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
  },
  silver: {
    backgroundColor: "#C5F1FB",
    width: "70px",
    height: "70px",
  },
  black: {
    backgroundColor: "black",
    width: "70px",
    height: "70px",
  },
  red: {
    backgroundColor: "red",
    width: "70px",
    height: "70px",
  },
  blue: {
    backgroundColor: "#234896",
    width: "70px",
    height: "70px",
  },
  chooseColorButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1952E294",
    width: "80%",
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default styles;
