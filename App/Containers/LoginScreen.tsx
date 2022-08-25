import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Button, Field} from '../Components';
import {AuthActions} from '../Redux/Auth';
import {AuthSelectors} from '../Selectors/Auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetching = useSelector(AuthSelectors.isFetching);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(AuthActions.ui.request({email, password}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Field
        testID="field-email"
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Field
        testID="field-password"
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      {!fetching && (
        <Button testID="button-login" title="Entrar" onPress={handleLogin} />
      )}
      {fetching && <ActivityIndicator size={'large'} />}
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
    fontWeight: '600',
    marginBottom: 24,
  },
});

export default LoginScreen;
