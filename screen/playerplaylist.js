import React from 'react'
import { View, Text, TouchableOpacity , Image } from 'react-native';
import { ScrollView, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../themes/color';
import PlaylistComponent from './../component/PlaylistComponent';

export default function Playerplaylist({ navigation }) {
  return (
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
  
    <SafeAreaView >
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

     <View style={{ backgroundColor:colors.Blanc , height:"100%", paddingHorizontal:5 ,}}>
        <View style={{display:'flex', flexDirection:"row" , justifyContent:'center', marginVertical:15}}>
            <Text style={{marginRight:3 ,fontWeight:'600', fontSize:20}}>Toutes</Text>
            <Text style={{borderBottomWidth:2, borderBottomColor:colors.Orange, paddingBottom:15 ,fontWeight:'600', fontSize:20, marginRight:2}}>les listes </Text>
            <Text style={{fontSize:20,fontWeight:'600',}}>de lecture </Text>
        </View>
      
      <View style={{width:'100%', display:"flex", flexDirection:'row', flexWrap:'wrap', marginVertical:30}}>
      <View style={{marginLeft:5, marginVertical:5 , width:'31%' }}>
        <View style={styles.firstelement}>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'flex-end' }}>
          <Image  style={{width:25 , height:25}} source={require('../assets/TROIS_POINTS_NOIRS_VERTICAL.png')}  ></Image>
          </View>
         <View style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
            <Image  style={{width:70 , height:70}} source={require('../assets/BOUTON_AJOUT_VIDEO_DANS_PLAYLIST_NOIR.png')}  ></Image>
            <Text style={{color:colors.Orange, fontWeight:'600' ,fontSize:15, textAlign:'center'}}>Créer une playlist</Text>
         </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('listeplay')} ><PlaylistComponent name="Playlist 001"></PlaylistComponent></TouchableOpacity>
     <PlaylistComponent name="Playlist 002"></PlaylistComponent>
     <PlaylistComponent name="Playlist 003"></PlaylistComponent>
     <PlaylistComponent name="Playlist 004"></PlaylistComponent>
     <PlaylistComponent name="Playlist 005"></PlaylistComponent>
     <PlaylistComponent name="Playlist 006"></PlaylistComponent>
     <PlaylistComponent name="Playlist 007"></PlaylistComponent>
      </View>
        
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
   firstelement:{
    backgroundColor:colors.Blanc,
     height:145,shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 8,
     
   },
   shadowOpacity: 0.44,
   shadowRadius: 10.32,
   elevation: 16,
   paddingTop:5,
   
 }
})