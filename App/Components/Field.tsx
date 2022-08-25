import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

const Field = (props: TextInputProps) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    width: '70%',
    backgroundColor: '#fff',
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export {Field};
