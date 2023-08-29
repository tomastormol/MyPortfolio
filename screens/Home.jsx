import { Text, StyleSheet, View, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import profile from '../assets/Profile.jpg'
import { useFonts } from 'expo-font';

export default Home = () => {

  const [fontsLoaded] = useFonts({
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Text style={styles.container}>Loading</Text>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.homeImage}>
          <Image source={profile} />
        </View>
        <View style={styles.homeBody}>
          <Text style={[styles.homeText, { fontFamily: 'Ubuntu-Regular' }]}>
            Hello, I am Tomas, a boy who loves the world of programming and is constantly learning React and React Native. {'\n'}
            This app was created with React Native.
          </Text>
        </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center'
  },
  homeImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  homeText: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    color: '#56B29D'
  }
})