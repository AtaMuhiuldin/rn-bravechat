import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import ProfileAvatar from '../core/profileAvatar';
const ITEM_HEIGHT = 75;

export interface ChatItemProps {
  _id: string;
  avatarUrl: string;
  isOnline: boolean;
  chatTitle: string;
  messageText: string;
  markedSeen: boolean;
}

interface Props {
  chatItem: ChatItemProps;
  onPress?: (source: ChatItemProps) => void;
}

const defaultProps = {
  chatItem: {
    _id: '',
    avatarUrl: 'https://picsum.photos/200',
    isOnline: false,
    chatTitle: 'Profile Name',
    messageText: 'This is a new message. ',
    markedSeen: false,
  },
};

const ChatListItem: React.FC<Props> = ({ chatItem, onPress }) => {
  const handleOnPressItem = () => {
    onPress?.(chatItem);
    /// do something
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPressItem}>
      <View style={styles.container}>
        <ProfileAvatar
          size={ITEM_HEIGHT - 5}
          source={{
            _id: chatItem._id,
            media: { uri: chatItem.avatarUrl, type: 'image' },
            isOnline: chatItem.isOnline,
          }}
        />
        <View style={styles.chatInfoContainer}>
          <View style={styles.chatNameContainer}>
            <Text numberOfLines={1} style={styles.chatName}>
              {chatItem.chatTitle}
            </Text>
          </View>
          <View style={styles.chatMessageContainer}>
            <Text
              numberOfLines={2}
              style={[styles.chatMessage, { fontWeight: chatItem.markedSeen ? 'normal' : 'bold' }]}>
              {chatItem.messageText}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

ChatListItem.defaultProps = defaultProps;
export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  chatInfoContainer: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 3,
  },
  chatNameContainer: {
    height: 30,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatMessageContainer: {
    flex: 1,
  },
  chatMessage: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
