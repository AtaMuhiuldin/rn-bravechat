import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeBottomTabNavigator from './bottomTabsNavigator';

const AppContainer: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <HomeBottomTabNavigator />
    </NavigationContainer>
  );
};
export default AppContainer;
