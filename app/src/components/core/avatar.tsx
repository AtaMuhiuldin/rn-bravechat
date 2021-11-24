import React from 'react';
import { Image, StyleSheet } from 'react-native';
interface Props {
  url: string;
  size?: number;
}
const defaultProps = {
  size: 25,
};
const Avatar: React.FC<Props> = ({ url, size }) => {
  return (
    <Image style={[styles.avatarStyle, { width: size, height: size }]} source={{ uri: url }} />
  );
};
Avatar.defaultProps = defaultProps;
export default Avatar;

const styles = StyleSheet.create({
  avatarStyle: {
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
});
