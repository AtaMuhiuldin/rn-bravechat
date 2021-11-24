import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { retreiveProfilesList } from '../../hooks/profileHooks';
import ProfileListItem from './profileListItem';
interface Props {
  navigation: any;
}
const ProfilesList: React.FC<Props> = ({ navigation }) => {
  const myProfiles = retreiveProfilesList();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {myProfiles.map((singleProfile) => (
          <ProfileListItem navigation={navigation} key={singleProfile._id} {...singleProfile} />
        ))}
      </View>
    </ScrollView>
  );
};
export default ProfilesList;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
