import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../Containers/LoginScreen';
import HomeScreen from '../Containers/HomeScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import {useSelector} from 'react-redux';
import {AuthSelectors} from '../Selectors/Auth';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  const isLogged = useSelector(AuthSelectors.isLogged);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      {!isLogged && <Stack.Screen name="Login" component={LoginScreen} />}
      {isLogged && <Stack.Screen name="Home" component={HomeScreen} />}
      {isLogged && <Stack.Screen name="Profile" component={ProfileScreen} />}
    </Stack.Navigator>
  );
}

export default StackNavigation;
