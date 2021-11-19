import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from './src/Gallery'

export default function App() {

  let state = {
    images: [
      {
        uri: 'https://picsum.photos/200/200',
        profile: 1
      },
      {
        uri: 'https://picsum.photos/200/200',
        profile: 2
      },
      {
        uri: 'https://picsum.photos/200/200',
        profile: 3
      },
      {
        uri: 'https://picsum.photos/200/200',
        profile: 4
      },
      {
        uri: 'https://picsum.photos/200/200',
        profile: 5,
      },
      {
        uri: 'https://picsum.photos/200/200',
        profile: 6
      },
      {
        uri: 'https://picsum.photos/200/200',
        profile: 7
      },
      {
        uri: 'https://picsum.photos/200/200',
        profile: 8
      },
      {
        uri: 'https://picsum.photos/200/200',
        profile: 9
      }
    ],
    userDetails: {}
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>Bienvenue sur PCR ! {"\n"}L'application ... !{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>

      <Gallery items={state.images} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
