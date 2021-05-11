/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, View, Text} from 'react-native';

function FormInputComponent({label, value}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: "100%",
      }}>
      <Text style={{marginHorizontal: 10}}>{label}</Text>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 5,
          // borderStartWidth: 1,
          // borderEndWidth: 1,
          // borderTopWidth: 1,
          // boderLeftWidth: 1,
          // borderRightWidth: 1,
          // borderBottomWidth: 1,
        }}
        placeholder="Type here to translate!"
        onChangeText={text => console.log(text)}
        defaultValue={value}
      />
    </View>
  );
}

export default FormInputComponent;
