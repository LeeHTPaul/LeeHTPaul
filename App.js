import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


function EventsHomeScreen(){
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Events First Page!</Text>
    </View> 
    );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsHomeScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}
