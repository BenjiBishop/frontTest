import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity , Image } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../themes/color';

export default function Headerscreen() {
    return(
        
        <View style={styles.contain}>
            <TouchableOpacity>
            <Image style={{ width:30, height:30}} source={require('../assets/TROIS_TRAITS_HORIZONTAL_BLANCS.png')} ></Image>
            </TouchableOpacity>
            <Text style={{color:colors.Orange, fontSize:16, fontWeight:'600'}}>VIDEOPOSITIVE</Text>
            <TouchableOpacity>
            <Image style={{ width:30, height:30}} source={require('../assets/TROIS_POINTS_BLANCS_HORIZONTAL.png')}></Image>
            </TouchableOpacity>
        </View>
     
    )
}
const styles=StyleSheet.create({
   contain:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    marginVertical:10
    
   }
})