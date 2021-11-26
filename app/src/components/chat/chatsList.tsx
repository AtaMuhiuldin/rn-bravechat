import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { retreiveChatsList } from '../../mockData/chat';
import ChatListItem from './chatListItem';

interface Props {
  navigation: any;
}
const ChatsList: React.FC<Props> = ({ navigation }) => {
  const chats = retreiveChatsList();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {chats.map((item) => (
        <ChatListItem key={item._id} chatItem={item} />
      ))}
    </ScrollView>
  );
};
export default ChatsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
