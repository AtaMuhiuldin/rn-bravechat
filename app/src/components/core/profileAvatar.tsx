import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import OnlineStatus from '../core/onlineStatus';

export interface AvatarSourceProps {
  _id: string;
  media: { uri: string; type: string };
  isOnline: Boolean;
}

interface Props {
  source: AvatarSourceProps;
  size: number | string;
  onPress?: (source: AvatarSourceProps) => void;
}

const ProfileAvatar: React.FC<Props> = ({ source: { _id, media, isOnline }, size, onPress }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={styles.innerContainer}>
        <TouchableWithoutFeedback onPress={() => onPress?.({ _id, media, isOnline })}>
          <Image style={styles.imageContainer} source={{ uri: media.uri }} />
        </TouchableWithoutFeedback>
        <View style={styles.onlineStatuaContainer}>
          <OnlineStatus isOnline={isOnline} />
        </View>
      </View>
    </View>
  );
};
export default ProfileAvatar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '99%',
    height: '99%',
    backgroundColor: '#d9d9d9',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  onlineStatuaContainer: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
});
