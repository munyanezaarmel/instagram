import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "./login.Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
type SignUpProps = {
  navigation: NavigationProp<any>;
};
const Login: React.FC<SignUpProps> = ({ navigation }) => {
  return (
    <View style={styles.containerLogin}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../../../assets/images/instagramIcon.jpeg")}
          style={styles.icon}
        />
      </View>
      <View>
        <TextInput
          style={styles.input1}
          placeholder="Phone number,username or Email"
        />
        <TextInput style={styles.input2} placeholder="Password" />
        <Text style={styles.forgotPassword}>forgot password</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login in</Text>
        </TouchableOpacity>
        <View style={styles.bottomText}>
          <Text style={styles.donthaveaccount}>Dont have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupLink}>sign up here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
