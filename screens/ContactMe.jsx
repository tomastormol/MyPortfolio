import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default ContactMe = () => {

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
        <View style={styles.item}>
          <FontAwesome name="user" size={40} color="black" />
          <View style={styles.itemText}>
            <Text style={[styles.homeText, { fontFamily: 'Ubuntu-Regular' }]}>Name</Text>
            <Text style={[styles.homeText, { fontFamily: 'Ubuntu-Regular' }]}>Tomas Tortosa Molto</Text>
          </View>
        </View>
        <View style={styles.item}>
          <FontAwesome name="user" size={40} color="black" />
        </View>
        <View style={styles.item}>
          <FontAwesome name="user" size={40} color="black" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EAEAEA',
  },
  item: {
    flexDirection: 'row',
    gap: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})