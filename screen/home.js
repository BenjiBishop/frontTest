import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PanierScreen from './panier';
import ProfilScreen from './profil';
import SearchScreen from './searchpage';

import StackNavigator from './../component/Stacknavigator';
import Stackprofilnavigator from './../component/Stackprofilnavigator';
const Tab = createBottomTabNavigator();

export default function HomeScrenn() {
  
  return (
 
   
    <Tab.Navigator screenOptions={{ headerShown: false 
      
    }} >
    <Tab.Screen name="Acceuil" component={StackNavigator}  />
    <Tab.Screen name="Rechercher" component={SearchScreen} />
    <Tab.Screen name="Panier" component={PanierScreen} />
    <Tab.Screen name="Profil" component={Stackprofilnavigator} />
  </Tab.Navigator>

  );
}
