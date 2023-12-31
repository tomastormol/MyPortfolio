import { Text, StyleSheet, View, Image, TouchableOpacity, Linking, Platform } from 'react-native'
import React from 'react'
import profile from '../assets/Profile.jpg'
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { Platform } from 'react-native'

// const AppBar = Platform.select({
//   ios: () => require('./IOSAppBar.jsx').default,
//   default: () => require('./AndroidAppBar.jsx').default
// })()

// Mejor forma: Poner fichero.ios y al importar el componente, quitarle la extensión. Ejemplo:
// AppBar.ios.jsx
// Importar AppBar

// Formulario probar React Hook Form
//Validaciones para formularios con YUP

// Usar Typescript

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
          <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL('https://tomastormol.tiiny.site/')} >
            <FontAwesome5 name="cloud-download-alt" size={24} color="#FFF" />
            <View>
              <Text style={[styles.buttonText, { fontFamily: 'Ubuntu-Regular' }]}>Resume</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL('https://www.linkedin.com/in/tomas-tortosa-molto/')}>
            <FontAwesome name="linkedin-square" size={24} color="#FFF" />
            <View>
              <Text style={[styles.buttonText, { fontFamily: 'Ubuntu-Regular' }]}>Linkedin</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL('https://tomastormol.github.io/tormol/')} >
            <AntDesign name="github" size={24} color="#FFF" />
            <View>
              <Text style={[styles.buttonText, { fontFamily: 'Ubuntu-Regular' }]}>Portfolio</Text>
            </View>
          </TouchableOpacity>
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
  buttonText: {
    color: '#FFF',
    fontSize: 20
  },
  homeImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBody: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
    marginTop: 10
  },
  homeText: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    color: '#56B29D',
    marginBottom: 30
  },
  // fontSize: Platform.select({
  //   ios: 10,
  //   android: 12,
  //   default: 11
  // }),
  touchable: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#56B29D',
    width: '65%',
    height: 50,
    borderRadius: 10,
    marginTop: 20
  },
})