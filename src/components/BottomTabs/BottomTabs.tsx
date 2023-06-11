import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import Feeds from "../Feeds/Feeds";
import Stream from "../streaming/Stream";
import Home from "../Home/Header";
import styles from "../Home/home.styles";

const Tab = createBottomTabNavigator();

const ProfileIcon = () => (
  <Image
    source={{
      uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    }}
    style={styles.imageBottom}
  />
);

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconComponent;

          if (route.name === "Profile") {
            iconComponent = <ProfileIcon />;
          } else if (route.name === "Search") {
            iconComponent = <Icon name="magnify" size={size} color={color} />;
          } else if (route.name === "Feeds") {
            iconComponent = <Icon name="newspaper" size={size} color={color} />;
          } else if (route.name === "Stream") {
            iconComponent = <Icon name="video" size={size} color={color} />;
          } else if (route.name === "Home") {
            iconComponent = <Icon name="home" size={size} color={color} />;
          }

          return iconComponent;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          display: "flex",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Stream" component={Stream} />
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
