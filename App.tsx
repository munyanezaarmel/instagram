
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import Login from "./src/components/Login/Login";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {
   const [fontsLoaded] = useFonts({
     "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
     "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
   });
if (!fontsLoaded) {
  return <AppLoading />;
} else {
  return <Login />;
}
}
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});
