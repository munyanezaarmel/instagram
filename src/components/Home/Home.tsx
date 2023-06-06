import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from "./home.styles";
import Icon from "react-native-vector-icons/Feather";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerIconsWrapper}>
        <View>
          <Image
            source={require("../../../assets/images/1.png")}
            style={styles.imageIcon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.leftIcons}>
          <Icon
            name="plus-square"
            size={30}
            color="black"
            style={styles.plus}
          />
          <Icon name="heart" size={30} color="black" style={styles.heart} />
          <Icon name="send" size={30} color="black" />
        </View>
      </View>
    </View>
  );
}