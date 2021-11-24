import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeBottomTabNavigator from './bottomTabsNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/profileScreen';
const Stack = createStackNavigator();

export const navigationRef = React.createRef<any>();

export function goBack() {
  navigationRef.current?.goBack();
}
export function navigate(name: String, params?: Object) {
  navigationRef.current?.navigate(name, params);
}

const ProfileStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const AppContainer: React.FC<{}> = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ header: (props) => false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
        <Stack.Screen name="Profile" component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
