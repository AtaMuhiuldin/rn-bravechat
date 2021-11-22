import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
const DefaultHeader: React.FC<BottomTabHeaderProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainerStyle}>
        <Text>Logo</Text>
      </View>
      <FontAwesome size={25} name="wrench" />
    </View>
  );
};
export default DefaultHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  iconContainerStyle: {
    width: 70,
    height: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
