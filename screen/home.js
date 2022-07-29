import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PanierScreen from './panier';
import ProfilScreen from './profil';
import SearchScreen from './searchpage';

import StackNavigator from './../component/Stacknavigator';
import colors from '../themes/color';
const Tab = createBottomTabNavigator();

export default function HomeScrenn() {
  
  return (
 
   
    <Tab.Navigator screenOptions={{ headerShown: false , tabBarStyle: { height:75 },
      
    }} >
    <Tab.Screen name="Acceuil" component={StackNavigator}  />
    <Tab.Screen name="Rechercher" component={SearchScreen} />
    <Tab.Screen name="Panier" component={PanierScreen} />
    <Tab.Screen name="Profil" component={ProfilScreen} />
  </Tab.Navigator>

  );
}
