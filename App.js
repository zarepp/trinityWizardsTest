import * as React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import ContactDetailsScreen from './screens/ContactDetails';

const Stack = createStackNavigator();

function LogoTitle({navigation}) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ marginHorizontal: 10 }}>Search</Text>
      <Text style={{ marginHorizontal: 10 }}>Home</Text>
      <Text style={{ marginHorizontal: 10 }}>Add</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: props => <LogoTitle {...props} />}}
        />
        <Stack.Screen
          name="ContactDetailsScreen"
          component={ContactDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
