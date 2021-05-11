import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';

import ContactListComponent from '../components/ContactList';

import DUMMMY from '../data.json';

function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View style={{flex: 1, marginHorizontal: 20}}>
        {DUMMMY.map(item => {
          const dataString = JSON.stringify(item);
          const data = JSON.parse(dataString);
          console.log('data:', data);
          return <ContactListComponent data={data} onPress={() => navigation.navigate('ContactDetailsScreen', { data })}/>;
        })}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
