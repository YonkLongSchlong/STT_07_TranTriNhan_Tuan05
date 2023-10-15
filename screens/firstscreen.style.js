import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexBasis: "85%",
    paddingTop: 20,
  },
  stretch: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  productSection: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  headerSection: {
    marginTop: 20,
  },
  headerText: {
    fontSize: "17px",
    fontWeight: "bold",
  },
  ratingSection: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  ratingStarContainer: {
    flexDirection: "row",
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 50,
  },
  priceTextNew: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  priceTextOld: {
    color: "grey",
    fontStyle: "italic",
  },
  saleSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  saleText: {
    fontWeight: "bold",
    color: "red",
  },
  chooseColorSection: {
    marginTop: 10,
    width: "85%",
  },
  chooseColorButton: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: "center",
  },
  arrow: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  buyButtonSection: {
    marginTop: 25,
    width: "85%",
    justifyContent: "flex-end",
  },
  buyButton: {
    alignItems: "center",
    backgroundColor: "red",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buyButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
