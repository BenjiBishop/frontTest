
import * as React from 'react';
import { ScrollView, StyleSheet,Text,View,TouchableOpacity,Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../themes/color';
import Headerscreen from './../component/header';
import CommentaireComponent from '../component/CommentaireComponent';
import RecommendedComponent from './../component/recommended';


export default function PlayerScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
   
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{x: 0, y: 0}}  end={{x: 1, y: 0}} >
  
    <SafeAreaView >
      <Headerscreen></Headerscreen>
      <View style={styles.video}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      </View>
     <View style={{backgroundColor:'white'}}>
        
     <View style={{display:'flex' , flexDirection:'row', marginTop:5, paddingHorizontal:5, justifyContent:'space-between',backgroundColor:'white' , alignItems:'center'}} >
          <Text style={{fontSize:18 , width:'70%'}}>
              ceci est  le titre de la  video 
            </Text>
        
        <View style={{width:'30%' , }}>
        <LinearGradient colors={['#EA5B0C', '#F39200']} style={{paddingVertical:4}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
          <TouchableOpacity  >
          <Text style={{color:colors.Blanc, fontSize:16, fontWeight:'700',  textAlign:'center'}}>3500 FCFA</Text>
        </TouchableOpacity>
          </LinearGradient>
        </View>
       
    </View>
     <View style={styles.option}>
       <Image source={require('../assets/BOUTON_AIMER_ORANGE.png')} style={styles.img}  ></Image>
       <Image source={require('../assets/BOUTON_FAVORI_ORANGE.png')} style={styles.img} ></Image>
       <Image source={require('../assets/BOUTON_PANIER_ORANGE.png')} style={styles.img} ></Image>
       <Image source={require('../assets/BOUTON_AJOUT_VIDEO_DANS_PLAYLIST_ORANGE.png')} style={styles.img} ></Image>
       <Image source={require('../assets/BOUTON_PARTAGE_ORANGE.png')} style={styles.img} ></Image>
     </View>
     </View>
     <ScrollView style={styles.container}>
      <View style={styles.commentaire}>
        <View style={styles.com} >
          <View style={{display:'flex', alignItems:'center', flexDirection:'row' , marginRight:5 }}>
          <Text style={{color:colors.Noir, paddingRight:2, borderBottomWidth:1 , fontWeight:'600', borderBottomColor:colors.Orange }}>commentaires : </Text>
          <Text style={{color:colors.Orange , marginRight:15}}>1548</Text>
          </View>
          <View style={{backgroundColor:colors.Orange, height:1 , width:'50%', marginRight:7, fontWeight:'600' }}>

          </View>
          <View>
            <Image source={require('../assets/FLECHE_COMMENTAIRE_HAUT_NOIR.png')} style={{width:15,height:15}}></Image>
          </View>
        </View>
        <View style={styles.comform}>
        <CommentaireComponent></CommentaireComponent>
       
        <RecommendedComponent></RecommendedComponent>
     
        </View>
      </View>
      </ScrollView>
        
    </SafeAreaView>
   
    </LinearGradient>
   
  );
  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
       height:200,
      
     },
     video:{
      width:'100%',
      height:300
     },
     option:{
      backgroundColor:'ghostwhite',
      height:50,
      marginHorizontal:5,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:5
      
     },
     img:{
      width:45,
      height:45
     },
     commentaire:{
      margin:10,
      
     },
     com:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      
     }

});
