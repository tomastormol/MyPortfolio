import { Text, StyleSheet, View, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import profile from '../assets/Profile.jpg'
import * as Font from 'expo-font';

export default Home = () => {

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'ubuntu-font': require('../assets/fonts/Ubuntu-Regular.ttf')
      });
    }
    loadFont();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.homeImage}>
        <Image source={profile} />
      </View>
      <View style={styles.homeBody}>
        <Text style={[styles.homeText, {fontFamily: 'ubuntu-font'}]}>
          Hello, I am Tomas, a boy who loves the world of programming and is constantly learning React and React Native. {'\n'} 
          This app was created with React Native.
        </Text>
      </View>
    </View>
  )
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