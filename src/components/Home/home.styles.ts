import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageIcon: {
    height: 130,
    width: 130,
left:-60,
       marginHorizontal:50
  },
  headerIconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
     marginHorizontal:40
    
  },
  leftIcons: {
    flexDirection: "row",
  },
  plus: {
    marginRight:10
  },
  heart: {
        marginRight:10
  }
});

export default styles;
