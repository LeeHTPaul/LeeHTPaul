import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, StatusBar, TouchableOpacity } from 'react-native';
import CounterText from './counterText';

export default function App() {

  let [count, setCount] = useState(0) 

  function buttonClicked(){
    let count1 = Math.floor((Math.random() * 100) + 1)
    console.log(`Before Pressing, the count was ${count}`)
    setCount(count + count1)
  }

  function renderEncouragingText(){
    if (count>=10) {
      return 'Keep going'
    }
  }

  function renderEncouragingText2(){
    if (count>=20) {
      return 'Keep going - dont give up!'
    }
  }

  function renderEncouragingText3(){
    if (count<0)
    {
      return 'Count must be at least 0!'
    }
  }

  function buttonClickedReduce(){
    if (count>=0) {
      setCount(count - 1);
    }
    else{
      renderEncouragingText3()
    }
  }

  function buttonClickedReset(){
    {
      setCount(0);
    }
  }

  return (
    <View style={styles.container}>
      <CounterText color='lightgrey' fontSize={10}>{count}</CounterText>
      <CounterText color='lightblue' fontSize={30}>{count}</CounterText>
      <CounterText color='blue' fontSize={60}>{count}</CounterText>
      <CounterText color='navy' fontSize={90}>{count}</CounterText>
      <TouchableOpacity onPress={buttonClicked} style={styles.button}>
      <Text style={styles.buttonText}>{Math.floor((Math.random() * 1000) + 1)}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={buttonClickedReduce} style={styles.buttonR}>
      <Text style={styles.buttonTextR}>{Math.floor((Math.random() * 100) + 1)}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={buttonClickedReset} style={styles.buttonR2}>
      <Text style={styles.buttonTextR2}>{Math.floor((Math.random() * 10) + 1)}</Text>
      </TouchableOpacity>
      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
      <Text style={styles.encouragingText}>{renderEncouragingText2()}</Text>
      <Text style={styles.encouragingText}>{renderEncouragingText3()}</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'grey',
  },

  encouragingText: {
    marginTop: 10,
    color: '#aaaaaa',
  },

  button:{
    backgroundColor: "navy",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },

  buttonR:{
    backgroundColor: "green",
    padding: 20,
    borderRadius: 90,
    marginTop: 5,
    marginLeft: 100,
    marginRight: 100,
    
  },

  buttonTextR: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 17,
   // marginRight: 100,
  },

  buttonR2:{
    backgroundColor: "purple",
    padding: 20,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 100,
    marginRight: 100,
  },

  buttonTextR2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
   // marginRight: 100,
  },
});