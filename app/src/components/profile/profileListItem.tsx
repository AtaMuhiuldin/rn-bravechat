import React from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import OnlineStatus from '../core/onlineStatus';
const WINDOW_WIDTH = Dimensions.get('window').width;
const ITEM_SIZE = WINDOW_WIDTH / 3;

interface Props {
  _id: string;
  media: { uri: string; type: string };
  isOnline: Boolean;
  navigation: any;
}

const ProfileListItem: React.FC<Props> = ({ _id, media, isOnline, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
          <Image style={styles.imageContainer} source={{ uri: media.uri }} />
        </TouchableWithoutFeedback>
        <View style={styles.onlineStatuaContainer}>
          <OnlineStatus isOnline={isOnline} />
        </View>
      </View>
    </View>
  );
};
export default ProfileListItem;

const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
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
