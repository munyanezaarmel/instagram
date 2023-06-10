import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Stories from '../src/components/Home/Stories';
import Posts from '../src/components/Home/Posts';
import BottomTabs from '../src/components/BottomTabs/BottomTabs';
import { ScrollView } from "react-native";
import Header from '../src/components/Home/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Stories />
        <Posts />
        <BottomTabs />
      </ScrollView>
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