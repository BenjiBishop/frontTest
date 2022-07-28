import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PanierScreen from './panier';
import ProfilScreen from './profil';
import SearchScreen from './searchpage';

import StackNavigator from './../component/Stacknavigator';
const Tab = createBottomTabNavigator();

export default function HomeScrenn() {
  
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Acceuil" component={StackNavigator}  />
    <Tab.Screen name="Rechercher" component={SearchScreen} />
    <Tab.Screen name="Panier" component={PanierScreen} />
    <Tab.Screen name="Profil" component={ProfilScreen} />
  </Tab.Navigator>
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
