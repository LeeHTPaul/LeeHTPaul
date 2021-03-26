import * as React from "react";
import { View, StyleSheet, Image } from 'react-native';
import { List, Title } from 'react-native-paper'

const contactsData = [
  {
    name: "Charles Ying",
    title: "Manager",
    company: "Ying Pte Lid",
    pic: "https://randomuser.me/portraits/men/10.jpg",
  },
  {
    name: "Emma Lin",
    title: "President",
    company: "Emma Consultants Pte Ltd",
    pic: "https://randomuser.me/portraits/women/61.jpg",
  },
  {
    name: "Adam Matthew Timothy",
    title: "Entreprenuer",
    company: "Angels investment",
    pic: "https://randomuser.me/portraits/men/20.jpg",
   
  },
  {
    name: "Barnabas Paul",
    title: "Consultant",
    company: "PBL Consults",
    pic: "https://randomuser.me/portraits/men/36.jpg",
   
  },
];

export default function ContactScreen() {
  return(
    <View style={styles.container}>
      <Title style={styles.title}> Contacts </Title>
      <View style={styles.list}>
        {contactsData.map((item, i) => {
          return (
            <List.Item
              key={i}
              title={item.name}
              description={item.company, item.title}
              right={props =>
                <Image {...props} style={styles.icon} source={{ uri: item.pic }} />}
            />)
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20, 
  },
  list: {
    marginTop: 20,
    marginLeft: 10, 
    marginRight: 10
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50
  }
})