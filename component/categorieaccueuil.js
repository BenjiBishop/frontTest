import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text ,Image, TouchableOpacity } from 'react-native';
import colors from '../themes/color';

function Categorieaccueuil(props) {
  return (
    
    <LinearGradient colors={['#EA5B0C', '#F39200']} style={{borderRadius:20, width:"30%" , marginBottom:20, height:130 ,  shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 11,
    },
    shadowOpacity: 0.57, shadowRadius: 15.19,  elevation: 23, 
    display:"flex" , justifyContent:"center",alignItems:'center'}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
   <TouchableOpacity>
   <View style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:"center"}} >
    <Image style={{width:50 , height:50}} source={require('../assets/ICONE_LOGO.png') }/>
    <Text style={{color:colors.Blanc, fontWeight:"700", fontSize:14, marginTop:4}}>{props.name} </Text>
    </View>
   </TouchableOpacity>
    </LinearGradient>
  )
}

export default Categorieaccueuil