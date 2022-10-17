import React from 'react'
import { View, Text ,TouchableOpacity } from 'react-native';
import Headerscreen from '../component/header';
import { ScrollView, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../themes/color';
import Categorieaccueuil from '../component/categorieaccueuil';
export default function Categories() {
  return (
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
  
    <SafeAreaView >
      <Headerscreen name="Categories"></Headerscreen>

     <View style={{ backgroundColor:colors.Blanc , height:"100%", paddingHorizontal:5}}>
        <View style={{display:'flex', flexDirection:"row" , justifyContent:'center', marginTop:15}}>
            <Text style={{marginRight:3 , fontSize:20}}>Toutes</Text>
            <Text style={{borderBottomWidth:2, borderBottomColor:colors.Orange, paddingBottom:15 , fontSize:20, marginRight:2}}>les catégories </Text>
            <Text style={{fontSize:20}}>de vidéo </Text>
        </View>
        <View style={{display:"flex", flexDirection:'row', flexWrap:'wrap', justifyContent:"space-between" , marginVertical:30}}>
        
        <Categorieaccueuil name="Bien-être"></Categorieaccueuil>
        <Categorieaccueuil name="Culture"></Categorieaccueuil>
        <Categorieaccueuil name="Ecologie"></Categorieaccueuil>
        <Categorieaccueuil name="Entrepreunariat"></Categorieaccueuil>
        <Categorieaccueuil name="Nos Droits"></Categorieaccueuil>
        <Categorieaccueuil name="S'inspirer "></Categorieaccueuil>
        <Categorieaccueuil name="Santé"></Categorieaccueuil>
        <Categorieaccueuil name="TIC"></Categorieaccueuil>
        <Categorieaccueuil name="Divers"></Categorieaccueuil>
       
        </View>
        
     </View>
    </SafeAreaView>
   
    </LinearGradient>
  )
}
