import { ScrollView, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Headerscreen from '../component/header';
import { View, Text, TouchableOpacity , Image } from 'react-native';
import colors from '../themes/color';

export default function ProfilScreen({ navigation }) {
  
  return (
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
  
    <SafeAreaView  >
      <Headerscreen name="Profil"></Headerscreen>
      <ScrollView style={styles.container}>
        <View  >
          <View style={styles.header2}>
           <View style={{display:'flex' , flexDirection:'row' , justifyContent:'center',alignItems:'center' }}>
              <View >
                  <Image style={{width:80, height:80}} source={require('../assets/user.png')} ></Image>
              </View>    
              <View style={{display:'flex', flexDirection:'column', marginLeft:20 , marginTop:50, marginBottom:10 }}>
                 <Text style={{fontWeight:'600', fontSize:20}}>Benjamin</Text>
                 <Text style={{color:colors.Orange , paddingTop:1}} >benji@esp.sn</Text>
              </View>
           </View>
           <LinearGradient  colors={['#EA5B0C', '#F39200']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.crayon}  >
              <TouchableOpacity onPress={() => navigation.navigate('modifprofil')} >
                  <Image  style={{width:40, height:40}} source={require('../assets/crayon.jpg')} ></Image>
              </TouchableOpacity>    
              </LinearGradient>
              
          </View>
        </View>
        <View style={{paddingHorizontal:15}}>
            <View style = {{width:'100%' , borderBottomColor:colors.Orange , borderBottomWidth:2}}>
              <Text style={{fontWeight:'600' , fontSize:20 , paddingBottom:2}}>Informations personnelles</Text>
            </View>
            <View style = {{width:'100%' , height:'auto', padding:5, marginTop:3, backgroundColor: '#F3F4F6' , display:'flex', flexDirection:'row' , flexWrap:'wrap'}}>
              <Text style={{fontWeight:'700' , fontSize:16 , paddingBottom:2 , marginRight:2}}>Nom Complet : </Text>
              <Text style={{fontWeight:'400' , fontSize:16 , paddingBottom:2 , color:colors.Orange}}> Benjamin </Text>
            </View>
            <View style = {{width:'100%' , height:'auto', padding:5, marginTop:3, backgroundColor: '#F3F4F6' , display:'flex', flexDirection:'row' , flexWrap:'wrap'}}>
              <Text style={{fontWeight:'700' , fontSize:16 , paddingBottom:2 , marginRight:2}}>Nom d'utilisateur : </Text>
              <Text style={{fontWeight:'400' , fontSize:16 , paddingBottom:2 , color:colors.Orange}}> Benji </Text>
            </View>
            <View style = {{width:'100%' , height:'auto', padding:5, marginTop:3, backgroundColor: '#F3F4F6' , display:'flex', flexDirection:'row' , flexWrap:'wrap'}}>
              <Text style={{fontWeight:'700' , fontSize:16 , paddingBottom:2 , marginRight:2}}>Email : </Text>
              <Text style={{fontWeight:'400' , fontSize:16 , paddingBottom:2 , color:colors.Orange}}> benji@esp.sn</Text>
            </View>
            <View style = {{width:'100%' , height:'auto', padding:5, marginTop:3, backgroundColor: '#F3F4F6' , display:'flex', flexDirection:'row' , flexWrap:'wrap'}}>
              <Text style={{fontWeight:'700' , fontSize:16 , paddingBottom:2 , marginRight:2}}>Mot de Passe : </Text>
              <Text style={{fontWeight:'400' , fontSize:16 , paddingBottom:2 , color:colors.Orange}}> ********</Text>
            </View>
            <View style = {{width:'100%' , height:'auto', padding:5, marginTop:3, backgroundColor: '#F3F4F6' , display:'flex', flexDirection:'row' , flexWrap:'wrap'}}>
              <Text style={{fontWeight:'700' , fontSize:16 , paddingBottom:2 , marginRight:2}}>Telephone : </Text>
              <Text style={{fontWeight:'400' , fontSize:16 , paddingBottom:2 , color:colors.Orange}}> NEANT</Text>
            </View>
            <View style = {{width:'100%' , height:'auto', padding:5, marginTop:3, backgroundColor: '#F3F4F6' , display:'flex', flexDirection:'row' , flexWrap:'wrap'}}>
              <Text style={{fontWeight:'700' , fontSize:16 , paddingBottom:2 , marginRight:2}}>Pays : </Text>
              <Text style={{fontWeight:'400' , fontSize:16 , paddingBottom:2 , color:colors.Orange}}> NEANT</Text>
            </View>
            <LinearGradient colors={['#33B5FF', '#33D4FF']} style={{borderRadius:150 , marginTop:20 , width:'50%',shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <TouchableOpacity  style={styles.button} onPress ={()=>navigation.navigate('signin')} >
        <Text style={{color:colors.Blanc, fontSize:16, fontWeight:'700'}}>Déconnexion</Text>
      </TouchableOpacity>
        </LinearGradient>
        </View>
    
      </ScrollView>
    </SafeAreaView>
   
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    width:'100%',
    height:'100%',

  },
  header2:{
    backgroundColor: '#F3F4F6',
    height:80,
    marginBottom:70,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
  

  },
  pp:{
    height:100,
    width:100,
    marginTop:50,
    borderRadius:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  crayon:{
    height:40,
    width:40,
    marginTop:60,
    borderRadius:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    alignItems: "center",
    padding: 10,
  }
});
