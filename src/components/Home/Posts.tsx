import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontIcon from "react-native-vector-icons/FontAwesome";
import React,{useState} from 'react'

import styles from "./home.styles";


const Posts = () => {
      const [liked, setLiked] = useState(false);

      const handleLike = () => {
        setLiked(!liked);
      };

  return (
    <View>
      <View style={styles.PostsProfile}>
        <Image
          source={require("../../../assets/images/user-5.jpeg")}
          style={styles.postsImage}
        />
        <Text style={styles.profileName}>munyarmel</Text>
        <Icon
          name="dots-horizontal"
          size={30}
          color="black"
          style={styles.postsIcon}
        />
      </View>

      <Image
        source={require("../../../assets/images/user-5.jpeg")}
        style={styles.post}
      />
      <View>
        <View style={styles.PostsProfile}>
          <TouchableOpacity onPress={handleLike}>
            {liked ? (
              <FontIcon
                name="heart"
                size={30}
                color="red"
                style={styles.heart}
              />
            ) : (
              <IconFeather
                name="heart"
                size={30}
                color="black"
                style={styles.heart}
              />
            )}
          </TouchableOpacity>
          <IconFeather
            name="message-circle"
            size={30}
            color="black"
            style={styles.heart}
          />
          <IconFeather
            name="send"
            size={30}
            color="black"
            style={styles.heart}
          />
          <IconFeather
            name="bookmark"
            size={30}
            color="black"
            style={styles.postsIcon}
          />
        </View>
      </View>
      <Text style={styles.likes}>4 likes</Text>
      <View style={styles.userNameComment}>
        <Text style={styles.usernameComment}>munyaarmel</Text>
        <Text style={styles.firstComment}>
          hello instagram this is your boy
        </Text>
      </View>
      <Text style={styles.comments}> view all 2 comment</Text>
      <View style={styles.userNameComment}>
        <Text style={styles.usernameComment}>Gabridush</Text>
        <Text style={styles.firstComment}>nice pic brother</Text>
      </View>
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
}

export default Posts