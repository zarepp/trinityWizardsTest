/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

function ContactListComponent({data, onPress}) {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}
      onPress={onPress}
    >
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 50 / 2,
          backgroundColor: 'orange',
        }}
      />
      <Text
        style={{marginLeft: 10}}>{`${data.firstName} ${data.lastName}`}</Text>
    </TouchableOpacity>
  );
}

export default ContactListComponent;