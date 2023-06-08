import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginTop: -30,
  },

  imageIcon: {
    height: 130,
    width: 130,
    left: -60,
    marginHorizontal: 50,
  },
  storiesImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: "blue",
    borderWidth: 3,
  },
  postsImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: "blue",
    borderWidth: 3,
    padding: 20,
  },
  imageBottom: {
     width: 40,
    height: 40,
    borderRadius: 50,
    // borderColor: "blue",
    // borderWidth: 3,
    // padding: 20,
  },
  likes: {
    fontWeight: "700",
  },
  usernameComment: {
    fontWeight: "900",
  },
  PostsProfile: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  post: {
    width: 500,
    height: 300,
  },
  userNameComment: {
    flexDirection: "row",
  },
  firstComment: {
    marginLeft: 10,
  },
  comments: {},
  postsIcon: {
    alignSelf: "flex-end",
    marginLeft: 250,
  },
  profileName: {
    paddingLeft: 10,
  },
  headerIconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 40,
  },
  leftIcons: {
    flexDirection: "row",
  },
  plus: {
    marginRight: 10,
  },
  heart: {
    marginRight: 20,
  },
  messages:{
    backgroundColor: "red",
    borderRadius: 25,
    position: "absolute",
    right:10,
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    zIndex:100
  },
  badgeText: {
     color: "white",
    fontWeight: "600",
  },
  storiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -20,
  },
});

export default styles;
