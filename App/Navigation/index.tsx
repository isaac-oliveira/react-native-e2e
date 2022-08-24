
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation'

function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default Navigation;