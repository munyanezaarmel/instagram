import { View, Text,Image,ScrollView } from 'react-native'
import styles from "./home.styles";
import React from 'react'
import data from '../../../data/data';

const Stories = () => {
  return (
    <View style={styles.storiesContainer}>
      {data.map((item, index) => (
        <ScrollView>
          <View key={index}>
            <Image source={{ uri: item.url }} style={styles.storiesImage} />
            <Text>{item.name}</Text>
          </View>
          <View
            style={{
              borderBottomColor: "grey",
              marginTop:20,
              borderBottomWidth:1,
            }}
          />
        </ScrollView>
      ))}
    </View>
  );
}

export default Stories