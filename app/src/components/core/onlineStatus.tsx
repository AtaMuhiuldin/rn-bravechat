import React from 'react';
import { View, StyleSheet } from 'react-native';
interface Props {
  isOnline: Boolean;
}
const OnlineStatus: React.FC<Props> = ({ isOnline }) => {
  return <View style={isOnline ? styles.onlineContainerStyle : styles.offlineContainerStyle} />;
};
export default OnlineStatus;

const styles = StyleSheet.create({
  onlineContainerStyle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  offlineContainerStyle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
});
