import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfilesList from '../components/profile/profilesList';

const ProfilesListScreen: React.FC<any> = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#f0f0f0" translucent={false} />
      <ProfilesList navigation={props.navigation} />
    </View>
  );
};
export default ProfilesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
