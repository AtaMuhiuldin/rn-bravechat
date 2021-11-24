import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatsList from '../components/chat/chatsList';

interface Props {
  navigation?: any;
}

const ChatsListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#f0f0f0" translucent={false} />
      <ChatsList navigation={navigation} />
    </View>
  );
};
export default ChatsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
