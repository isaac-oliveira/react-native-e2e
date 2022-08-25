import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../Components/Button';
import {AuthActions} from '../Redux/Auth';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(AuthActions.ui.logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja Bem-vindo</Text>
      <Button testID="button-logout" title="Sair" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
  },
});

export default HomeScreen;
