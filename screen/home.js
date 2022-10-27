import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Stackprofilnavigator from '../component/Stackprofilnavigator';
const Tab = createBottomTabNavigator();

export default function HomeScrenn() {
  
  return (
 
   
    <Tab.Navigator screenOptions={{ headerShown: false 
      
    }} >
   
    <Tab.Screen name="Profil" component={Stackprofilnavigator} />
  </Tab.Navigator>

  );
}
