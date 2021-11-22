import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfilesListScreen: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#f0f0f0" translucent={false} />
      <Text>ProfilesListScreen</Text>
    </View>
  );
};
export default ProfilesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
