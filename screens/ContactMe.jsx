import { Text, StyleSheet, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default ContactMe = () => {

  const [fontsLoaded] = useFonts({
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
  });

  const number = '+34 655900234'

  if (!fontsLoaded) {
    return (
      <Text style={styles.container}>Loading</Text>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <FontAwesome name="user" size={40} color="#56B29D" />
          <View style={styles.itemText}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.subTitle}>Tomas Tortosa Molto</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.item} onPress={() => Linking.openURL(`tel:${number}`)} >
        <FontAwesome name="phone" size={40} color="#56B29D" />
          <View style={styles.itemText}>
            <Text style={styles.title}>Phone</Text>
            <Text style={styles.subTitle}>+34 655 90 02 34</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => Linking.openURL(`mailto:tomastormol@gmail.com`)} >
        <Zocial name="email" size={40} color="#56B29D" />
          <View style={styles.itemText}>
            <Text style={styles.title}>Mail</Text>
            <Text style={styles.subTitle}>tomastormol@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => Linking.openURL(`https://wa.me/34655900234`)} >
          <FontAwesome name="whatsapp" size={40} color="#56B29D" />
          <View style={styles.itemText}>
            <Text style={styles.title}>WhatsApp</Text>
            <Text style={styles.subTitle}>Send message</Text>
          </View>
        </TouchableOpacity>
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
    alignItems: 'center',
    marginLeft: 70
  },
  subTitle: {
    fontSize: 20,
    color: '#56B29D',
    fontFamily: 'Ubuntu-Regular'
  },
  title: {
    fontSize: 22,
    color: '#56B29D',
    fontFamily: 'Ubuntu-Regular'
  }
})