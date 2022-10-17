import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './screen/signin';
import SignupScreen from './screen/signup';

import HomeScrenn from './screen/home';
import PlayerScreen from './screen/player';
import Categories from './screen/categories';
import Playerplaylist from './screen/playerplaylist';
import Selectplaylist from './screen/Selectplaylist';
const Stack = createNativeStackNavigator();


export default function App() {
  
 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Connexion" component={SigninScreen} />
        <Stack.Screen name='categorie' component={Categories} /> 
        <Stack.Screen name="inscription" component={SignupScreen} />
        <Stack.Screen name="home" component={HomeScrenn} />
        <Stack.Screen name="player" component={PlayerScreen} />
        <Stack.Screen name="playlist" component={Playerplaylist} />
        <Stack.Screen name="listeplay" component={Selectplaylist} />
  </Stack.Navigator>
      
    </NavigationContainer>
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
