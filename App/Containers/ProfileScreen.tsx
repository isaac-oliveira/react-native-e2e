import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {Button} from '../Components';
import {AuthActions} from '../Redux/Auth';
import {AuthSelectors} from '../Selectors/Auth';

const ProfileScreen = () => {
  const name = useSelector(AuthSelectors.getName);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(AuthActions.ui.logout());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {name}</Text>
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
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 20,
  },
});

export default ProfileScreen;
