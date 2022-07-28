
import * as React from 'react';
import { ScrollView, StyleSheet,Button  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../themes/color';
import Headerscreen from './../component/header';
import { Text, View , TouchableOpacity , Image } from 'react-native';

export default function PlayerScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
   
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
  
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
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      </View>
      <ScrollView style={styles.container}>
    <View style={{display:'flex' , flexDirection:'row', marginTop:5, paddingHorizontal:5, justifyContent:'space-between' , alignItems:'center'}} >
        <Text style={{fontSize:18 , width:'70%'}}>
            ceci est  le titre du video 
        </Text>
      
       <View style={{width:'30%' , }}>
       <LinearGradient colors={['#EA5B0C', '#F39200']} style={{paddingVertical:4}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <TouchableOpacity  >
        <Text style={{color:colors.Blanc, fontSize:16, fontWeight:'700',  textAlign:'center'}}>3500 FCFA</Text>
      </TouchableOpacity>
        </LinearGradient>
       </View>
       
    </View>
     
      
      </ScrollView>
   
    </SafeAreaView>
   
    </LinearGradient>
   
  );
  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
     },
     video:{
      width:'100%',
      height:300
     }
});
