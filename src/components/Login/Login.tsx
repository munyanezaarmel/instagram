import React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import styles from "./login.Styles";
import Icon from "react-native-vector-icons/FontAwesome";
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        {/* <Image
          source={require("../../../assets/illustrations/login2.jpg")}
          style={styles.image}
          resizeMode="contain"
        /> */}
      </View>
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.view2}>
        <Icon name="rocket" size={30} color="#900" />
        <TextInput placeholder="Email Id" />
      </View>
      <View>
        <Icon name="rocket" size={30} color="#900" />
        <TextInput placeholder="Password" />
        <Icon name="rocket" size={30} color="#900" />
      </View>
    </View>
  );
};

export default Login;
