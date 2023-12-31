import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import Home from './Home'
import Skills from './Skills';
import ContactMe from './ContactMe';

export default function TabNavigation({ route, navigation }) {

    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                focused ?
                <Entypo name="home" size={24} color="#56B29D" />
                :
                <Entypo name="home" size={24} color="black" />

              );
            } else if (route.name.replace(' ', '') === 'Skills') {
              return (
                focused ?
                <SimpleLineIcons name="menu" size={24} color="#56B29D" />
                :
                <SimpleLineIcons name="menu" size={24} color="black" />
              );
            } else if (route.name.replace(' ', '') === 'ContactMe') {
                return (
                  focused ?
                  <FontAwesome name="user" size={24} color="#56B29D" />
                  :
                  <FontAwesome name="user" size={24} color="black" />
                );
              }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#56B29D',
        })}
      >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name="Skills" component={Skills} options={{ headerShown: false }}/>
            <Tab.Screen name="Contact Me" component={ContactMe} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}