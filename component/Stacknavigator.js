
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccueilScreen from '../screen/acceuil';
import PlayerScreen from '../screen/player';
const Stack = createNativeStackNavigator();
export default function StackNavigator(){

    
    return(

        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="pardefaut" component={AccueilScreen}  />
        <Stack.Screen name="player" component={PlayerScreen} />
      </Stack.Navigator>
       
    )
}
