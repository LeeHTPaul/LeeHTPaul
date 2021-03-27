import * as React from "react"; 
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeScreen}/>
    </Stack.Navigator>
  )
}

function HomeScreen() {

  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>
          Details extensions
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome</Title>
            <Paragraph>Thank you for downloading this app. You will find the important details of the course have been enhanced here. Hope you find it interesting.</Paragraph>
          </Card.Content>
          </Card>
        
        <List.Section title="Frequently Asked Questions">
          <List.Accordion
            title="What is this for?">
            <List.Item title="Have fun learning JS!" />
          </List.Accordion>
          <List.Accordion
            title="When will this be?">
            <List.Item title="Right now! Click!!" />
          </List.Accordion>
          <List.Accordion
            title="Where will this be?">
            <List.Item title="In your Phone/Notebook!!" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  card: {
    marginTop: 20, 
    marginLeft: 15, 
    marginRight: 15,
  }
})