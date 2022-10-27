
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfilScreen from '../screen/profil';
import modifprofil from './../screen/modifprofil';
const Stack = createNativeStackNavigator();
export default function Stackprofilnavigator(){
    
    return(

        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="profil" component={ProfilScreen}  />
        <Stack.Screen name='modifprofil' component={modifprofil} />
      </Stack.Navigator>
       
    )
}
