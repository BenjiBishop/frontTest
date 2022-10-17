import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { View, Text , Image , StyleSheet , TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../themes/color';

export default function Selectplaylist() {
  return (
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
        < SafeAreaView>
                <View style={styles.contain}>
                <View style={{display:"flex" , flexDirection:"column", width:'65%' }}>
                <TouchableOpacity>
                    <Text style={{color:colors.Orange, fontSize:16, fontWeight:'600' , marginBottom:2}}>VIDEOPOSITIVE</Text>
                    </TouchableOpacity>
                    <View style={{display:"flex" , justifyContent:"space-between", alignItems:"center",  flexDirection:"row"}}>
                    <TouchableOpacity>
                    <Image style={{ width:30, height:30}} source={require('../assets/FLECHE_RETOUR_BLANC.png')} ></Image>
                    </TouchableOpacity>
                    <View >
                    <Text style={{color:colors.Blanc ,textAlign:"center", fontSize:20 , fontWeight:"700"}}>Playlists </Text>
                </View>
                    </View>
                
                
                </View>
                
                <TouchableOpacity>
                    <Image style={{ width:30, height:30}} source={require('../assets/TROIS_POINTS_BLANCS_HORIZONTAL.png')}></Image>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    </LinearGradient>
  )
}

const styles =StyleSheet.create({
    contain:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
      paddingHorizontal:20,
      marginVertical:10
     },

  })
