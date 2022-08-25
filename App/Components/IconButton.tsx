import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageSourcePropType,
} from 'react-native';

type Props = TouchableOpacityProps & {
  icon: ImageSourcePropType;
};

const IconButton = ({icon, ...props}: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image style={styles.icon} source={icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'red',
  },
});

export {IconButton};
