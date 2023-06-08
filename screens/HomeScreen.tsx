import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Home from '../src/components/Home/Header'
import Stories from '../src/components/Home/Stories';
import Posts from '../src/components/Home/Posts';
import BottomTabs from '../src/components/BottomTabs/BottomTabs';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Home />
      <Stories/>
      <Posts />
      <BottomTabs/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default HomeScreen