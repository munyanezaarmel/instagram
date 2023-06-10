import React,{useState} from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import styles from "./login.Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../firebaseConfig";
type SignUpProps = {
  navigation: NavigationProp<any>;
};
const Login: React.FC<SignUpProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Success", "Login Successful", [
          { text: "OK", onPress: () => navigation.navigate("Home") },
        ]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(`${errorMessage.slice(22)}`);
        // ..
      });
  };
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
          value={email}
          onChangeText={text=>setEmail(text)}
        />
        <TextInput style={styles.input2}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text=>setPassword(text)}
        />
        <Text style={styles.forgotPassword}>forgot password</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
