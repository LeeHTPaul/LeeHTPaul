import * as React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function HelloHomeScreen( {navigation} ) {
    return (
        <View style={styles.container}>
          <View style={styles.fillerContainer01}></View>
          <View style={styles.fillerContainer02}></View>
          <View style={styles.fillerContainer03}></View>
          <View style={styles.fillerContainer04}></View>
          <View style={styles.fillerContainer05}></View>
          <Text style={styles.text}> Hello World Again!  </Text>
          <View style={styles.fillerContainer06}></View>
          <View style={styles.fillerContainer07}></View>
          <View style={styles.fillerContainer08}></View>
          <View style={styles.fillerContainer09}></View>
          <View style={styles.fillerContainer10}></View>
        </View>
    );
}

const Stack = createStackNavigator();

export default function HelloScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Hello World" component={HelloHomeScreen} />
        </Stack.Navigator>

    );
  }

const styles = StyleSheet.create({

  container: { 
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },

  fillerContainer01: { 
    flex: 0.10,
    backgroundColor: 'blue',
    width: '50%',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
  },

  fillerContainer02: { 
    flex: 0.10,
    backgroundColor: 'red',
    width: '50%',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
  },

  fillerContainer03: { 
    flex: 0.10,
    backgroundColor: 'green',
    width: '50%',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
  },

  fillerContainer04: { 
    flex: 0.10,
    backgroundColor: 'brown',
    width: '50%',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
  },

  fillerContainer05: { 
    flex: 0.10,
    backgroundColor: 'lightgreen',
    width: '50%',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
  },

  fillerContainer06: { 
    flex: 0.10,
    backgroundColor: 'grey',
    width: '50%',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
  },

  fillerContainer07: { 
    flex: 0.10,
    backgroundColor: 'purple',
    width: '50%',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
  },

  fillerContainer08: { 
    flex: 0.10,
    backgroundColor: 'lightblue',
    width: '50%',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
  },

  fillerContainer09: { 
    flex: 0.10,
    backgroundColor: 'blue',
    width: '50%',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
  },

  fillerContainer10: { 
    flex: 0.10,
    backgroundColor: 'red',
    width: '50%',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
  },

})