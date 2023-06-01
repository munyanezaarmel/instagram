import React from "react";
import { StyleSheet, View, Image, Text, TextInput,Button } from "react-native";
import styles from "./signup.styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
const SignUp = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>SignUp</Text>
      <Button
        title="Go to Login"
        onPress={() =>
          navigation.navigate("Login", {
            itemId: 86,
            otherParam: "anything you want here",
          })
        }
      />
    </View>
  );
};

export default SignUp;
