import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilesListScreen from '../screens/profilesListScreen';
import ChatsListScreen from '../screens/chatsListScreen';
import ExploreScreen from '../screens/exploreScreen';
import FavoriteProflesListScreen from '../screens/favoriteProfilesListScreen';
import MyProfileScreen from '../screens/myProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import DefaultHeader from '../components/headers/defaultHeader';
import { useProfileInfo } from '../hooks/profileHooks';
import Avatar from '../components/headers/core/avatar';
const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator: React.FC<{}> = () => {
  const profileInfo = useProfileInfo();

  return (
    <Tab.Navigator
      screenOptions={{
        header: (props) => <DefaultHeader {...props} />,
      }}>
      <Tab.Screen
        name="ProfilesListScreen"
        component={ProfilesListScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => <FontAwesome name="users" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="ChatsListScreen"
        component={ChatsListScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => <FontAwesome name="comments" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => <FontAwesome name="globe" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="FavoriteProflesListScreen"
        component={FavoriteProflesListScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => <FontAwesome name="star" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => <Avatar size={size} url={profileInfo.avatarUrl} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeBottomTabNavigator;
