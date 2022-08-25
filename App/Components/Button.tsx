import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
};

const Button = ({title, ...props}: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'red',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export {Button};
