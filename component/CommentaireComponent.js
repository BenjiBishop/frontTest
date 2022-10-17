import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity , Image , TextInput  } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../themes/color';

export default function CommentaireComponent() {
    return(
        <View>
        <View style={{display:'flex', flexDirection:'row' , alignItems:'center', flex:1}}>
        <View style={styles.contain}>
             <TextInput   style={styles.input}  placeholder="Laisser un commentaire " multiline={true}  numberOfLines={3    } />
        </View>
        <TouchableOpacity>
            <Image style={{width:40,height:40}} source={require('../assets/BOUTON_VALIDER_COMMENTAIRE_ORANGE.png')}></Image>
        </TouchableOpacity>
        </View>
        <View style={{width:'90%'}}>
        <LinearGradient colors={['#EA5B0C', '#F39200']} style={{paddingVertical:4 , width:'50%'}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <Text style={{color:colors.Blanc, fontSize:16, fontWeight:'700',textAlign:'center' }}>Utilisateur501 </Text>
        </LinearGradient>
        <View style={{padding:5, display:'flex' , width:'100%', flexDirection:'row'}}>
            <Text  style={{backgroundColor:'ghostwhite' , width:'80%'}}>
            Lorem ipsum dolor sit amet, consectetuer adipis 
            Lorem ipsum dolor sit amet, consectetuer
            </Text>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_AIMER_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_REPONDRE_COMMENTAIRE_ORANGE.png')} ></Image>
        </View>
        <View style={{padding:5, display:'flex' , width:'100%', flexDirection:'row'}}>
            <Text  style={{backgroundColor:'ghostwhite' , width:'80%'}}>
            Lorem ipsum dolor sit amet, consectetuer adipis 
            Lorem ipsum dolor sit amet, consectetuer
            </Text>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_AIMER_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_REPONDRE_COMMENTAIRE_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_SUPPRIMER_ORANGE.png')} ></Image>
        </View>
        <View style={{padding:5, display:'flex' , width:'100%', flexDirection:'row'}}>
            <Text  style={{backgroundColor:'ghostwhite' , width:'80%'}}>
            Lorem ipsum dolor sit amet, consectetuer adipis 
            Lorem ipsum dolor sit amet, consectetuer
            </Text>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_AIMER_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_REPONDRE_COMMENTAIRE_ORANGE.png')} ></Image>
        </View>
        <View style={{padding:5, display:'flex' , width:'100%', flexDirection:'row'}}>
            <Text  style={{backgroundColor:'ghostwhite' , width:'80%'}}>
            Lorem ipsum dolor sit amet, consectetuer adipis 
            Lorem ipsum dolor sit amet, consectetuer
            </Text>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_AIMER_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_REPONDRE_COMMENTAIRE_ORANGE.png')} ></Image>
        </View>
        <View style={{padding:5, display:'flex' , width:'100%', flexDirection:'row'}}>
            <Text  style={{backgroundColor:'ghostwhite' , width:'80%'}}>
            Lorem ipsum dolor sit amet, consectetuer adipis 
            Lorem ipsum dolor sit amet, consectetuer
            </Text>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_AIMER_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_REPONDRE_COMMENTAIRE_ORANGE.png')} ></Image>
        </View>
        <View style={{padding:5, display:'flex' , width:'100%', flexDirection:'row'}}>
            <Text  style={{backgroundColor:'ghostwhite' , width:'80%'}}>
            Lorem ipsum dolor sit amet, consectetuer adipis 
            Lorem ipsum dolor sit amet, consectetuer
            </Text>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_AIMER_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_REPONDRE_COMMENTAIRE_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_SUPPRIMER_ORANGE.png')} ></Image>
        </View>
        <View style={{padding:5, display:'flex' , width:'100%', flexDirection:'row'}}>
            <Text  style={{backgroundColor:'ghostwhite' , width:'80%'}}>
            Lorem ipsum dolor sit amet, consectetuer adipis 
            Lorem ipsum dolor sit amet, consectetuer
            </Text>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_AIMER_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_REPONDRE_COMMENTAIRE_ORANGE.png')} ></Image>
        </View>

         <View style={{padding:5, display:'flex' , width:'100%', flexDirection:'row'}}>
            <Text  style={{backgroundColor:'ghostwhite' , width:'80%'}}>
            Lorem ipsum dolor sit amet, consectetuer adipis 
            Lorem ipsum dolor sit amet, consectetuer
            </Text>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_AIMER_ORANGE.png')} ></Image>
            <Image style={{width:30,height:30}} source={require('../assets/BOUTON_REPONDRE_COMMENTAIRE_ORANGE.png')} ></Image>
        </View>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
   contain:{
    
    paddingHorizontal:5,
    marginVertical:10,
    marginRight:3,
    borderRadius:15,
    backgroundColor:'ghostwhite',
    flex:2
   }
})