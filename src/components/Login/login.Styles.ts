import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  loginHeading: {
    color: "red",
  },
  container: {
    flex:1
  },
  image: {
    width: 500,
    height: 300,
  },
  view2: {
    flex:0.2
  },
  containerImage: {
flex:1
  },
  loginText: {
  fontFamily:"Inter-Bold"
    
  }
});

export default styles;
