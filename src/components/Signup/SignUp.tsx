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
import styles from "./signup.styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
type SignUpProps = {
  navigation: NavigationProp<any>;
};
const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
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
          placeholder="Email"
        />
        <TextInput
          style={styles.input1}
          placeholder="Username"
        />
        <TextInput style={styles.input2} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.bottomText}>
          <Text style={styles.donthaveaccount}>Aleady have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupLink}>Login in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
