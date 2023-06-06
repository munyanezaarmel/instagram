import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Home from '../src/components/Home/Home'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen