import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function CounterText(props) {
  console.log(props);
  return (
    <Text style={
      [styles.text,
      {
        color: props.color,
        fontSize: props.fontSize,
      }
      ]}>
        {props.children}
  </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold'
  }
})