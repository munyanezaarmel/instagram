import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  containerLogin: {
    backgroundColor: "white",
    flex: 1,
  },
  iconContainer: {
    marginTop: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  input1: {
    width: "90%",
    height: 45,
    borderColor: "#ddd",
    backgroundColor: "rgb(239, 239, 239)",
    marginBottom: 10,
    marginLeft: 20,
    borderRadius: 5,
    fontSize: 16,
    color: "black",
    padding: 10,
  },
  input2: {
    width: "90%",
    height: 45,
    borderColor: "#ddd",
    backgroundColor: "rgb(239, 239, 239)",
    marginBottom: 10,
    marginLeft: 20,
    borderRadius: 5,
    fontSize: 16,
    color: "black",
    padding: 10,
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 50,
  },
  forgotPassword: {
    marginLeft: 280,
    marginBottom: 20,
    fontSize: 16,
    color: "rgb(0, 149, 246)",
  },
  button: {
    width: "90%",
    height: 40,
    marginLeft: 20,
    backgroundColor: "rgb(0, 149, 246)",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  bottomText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  signupLink: {
    color: "rgb(0, 149, 246)",
  },
  donthaveaccount: {
    padding: 4,
    fontWeight: "600",
  },
});

export default styles;
