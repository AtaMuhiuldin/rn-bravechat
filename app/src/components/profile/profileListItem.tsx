import React from 'react';
import { Dimensions } from 'react-native';
import ProfileAvatar, { AvatarSourceProps } from '../core/profileAvatar';
const WINDOW_WIDTH = Dimensions.get('window').width;
const ITEM_SIZE = WINDOW_WIDTH / 3;

interface Props {
  _id: string;
  media: { uri: string; type: string };
  isOnline: Boolean;
  navigation: any;
}

const ProfileListItem: React.FC<Props> = ({ _id, media, isOnline, navigation }) => {
  const handleOnPressProfileItem = (source: AvatarSourceProps) => {
    navigation.navigate('Profile', {}); /// here can send params as well for clicked profile item
  };

  return (
    <ProfileAvatar
      size={ITEM_SIZE}
      onPress={handleOnPressProfileItem}
      source={{ _id, media, isOnline }}
    />
  );
};
export default ProfileListItem;
