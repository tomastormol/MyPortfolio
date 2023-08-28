import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Skills from './screens/Skills';
import ContactMe from './screens/ContactMe';
import TabNavigation from './screens/TabNavigation';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='TabNavigation'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ContactMe" component={ContactMe} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Skills" component={Skills} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 