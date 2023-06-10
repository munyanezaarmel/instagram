import React, { useState, useEffect } from "react";
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
import styles from "./signup.styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../firebaseConfig";

type SignUpProps = {
  navigation: NavigationProp<any>;
};
const SignUp: React.FC<SignUpProps> = ({ navigation }) => {

const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
  const [username, setUsername] = useState('')
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
 Alert.alert("Success", "Account created  successfully", [
   { text: "OK", onPress: () => navigation.navigate("Login") },
 ]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(`${errorMessage.slice(22)}`);
        // ..
      });
  }


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
          value={email}
          onChangeText={text=>setEmail(text)}
        />
        <TextInput
          style={styles.input1}
          placeholder="Username"
          value={username}
          onChangeText={text=>setUsername(text)
          }
        />
        <TextInput style={styles.input2}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
