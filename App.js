import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from "./screens/HomeScreen";
import  HelloScreen  from "./screens/HelloScreen";
import  ButtonScreen  from "./screens/ButtonScreen";
import  StarScreen  from "./screens/StarScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Hello') {
              iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
            } else if (route.name === 'Button') {
              iconName = focused ? 'gesture-tap-button' : 'gesture-tap-button';
              return <MaterialCommunityIcons name={iconName} size={size} color="black" />;
            } else if (route.name === 'Star') {
              iconName = focused ? 'star' : 'star';
              return <MaterialCommunityIcons name={iconName} size={size} color="black" />;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Hello" component={HelloScreen} />
        <Tab.Screen name="Button" component={ButtonScreen} />
        <Tab.Screen name="Star" component={StarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

