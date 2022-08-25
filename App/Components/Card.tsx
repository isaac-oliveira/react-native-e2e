import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  index: number;
}

const Card = ({title, index}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: index % 2 === 0 ? 'red' : '#8c0303'},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
  },
});

export {Card};
