import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView,TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the ASAP Delivery</Text>
      <Text>Sign in</Text>
      <View>
        <Text style={styles.phoneLabel}>phone number:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g:+250785679625"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  phoneLabel: {
    
  }
});