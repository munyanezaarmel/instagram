import { View, Text,Image,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
const CreatePosts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>New Posts</Text>
      <View style={styles.caption}>
        <Image source={require("../../../assets/images/instagramIcon.jpeg")} style={styles.captionImage} />
        <TextInput placeholder="write your caption" />
      </View>
          <TextInput placeholder="Enter image url" style={styles.url} />
          <Text>Share</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      padding:20  
    },
    head: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        marginTop:20
    },
    caption: {
        flexDirection:"row"
    },
    captionImage: {
        width: 70,
        height: 70,
        marginRight:30
    },
    url: {
        margin:20
    }

})

export default CreatePosts