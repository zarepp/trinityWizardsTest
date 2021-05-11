/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import FormInput from '../components/FormInput';

function ContactDetailsScreen() {
  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 100 / 2,
          backgroundColor: 'orange',
        }}
      />
      <View style={{backgroundColor: 'grey', width: '100%'}}>
        <Text>Main Info</Text>
      </View>
      <FormInput label="First Name" value={data.firstName} />
      <FormInput label="Last Name" value={data.lastName} />
      <View style={{backgroundColor: 'grey', width: '100%'}}>
        <Text>Main Info</Text>
      </View>
      <FormInput label="Email" value={data.email} />
      <FormInput label="Phone" value={data.phone} />
    </View>
  );
}

export default ContactDetailsScreen;
