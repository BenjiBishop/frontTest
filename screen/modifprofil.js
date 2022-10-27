import { ScrollView, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Headerscreen from '../component/header';
import { View, Text, TouchableOpacity , Image , TextInput } from 'react-native';
import colors from '../themes/color';

export default function Modifprofil({ navigation }) {
  
  return (
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
  
    <SafeAreaView style={{height:'100%'}} >
      <Headerscreen name="Profil"></Headerscreen>
      <ScrollView style={styles.container}>
        <View  >
          <View style={styles.header2}>
           <View style={{display:'flex' , flexDirection:'row' , justifyContent:'center',alignItems:'center' }}>
              <View >
                  <Image style={{width:80, height:80, marginTop:40}} source={require('../assets/user.png')} ></Image>
              </View>    
              
           </View>
        
          </View>
        </View>
        <View style={{paddingHorizontal:15}}>
            <View style = {{width:'100%' , borderBottomColor:colors.Orange , borderBottomWidth:2}}>
              <Text style={{fontWeight:'600' , fontSize:20 , paddingBottom:2}}>Modifier mes Informations </Text>
            </View>
            <View style={styles.email}>
            <Text style={{fontWeight:'700' , fontSize:16,color:colors.Orange , marginVertical:3}}>Nom complet</Text>
            <TextInput placeholderTextColor={'#7F7F7F'} style={styles.input} selectTextOnFocus={true}  placeholder="Aissatou Sall" />
            </View>
            <View style={styles.email}>
            <Text style={{fontWeight:'700' , fontSize:16,color:colors.Orange , marginVertical:3}}>Nom d'utilisateur</Text>
            <TextInput placeholderTextColor={'#7F7F7F'} style={styles.input} selectTextOnFocus={true}  placeholder="Aissatou_VP" />
            </View>
            <View style={styles.email}>
            <Text style={{fontWeight:'700' , fontSize:16,color:colors.Orange , marginVertical:3}}>Email</Text>
            <TextInput placeholderTextColor={'#7F7F7F'} style={styles.input} selectTextOnFocus={true}  placeholder="mastou@gmail.com" />
            </View>
            <View style={styles.password}>
            <Text style={{fontWeight:'700' , fontSize:16,color:colors.Orange , marginVertical:3}}>Mot de passe</Text>
            <TextInput placeholderTextColor={'grey'} style={styles.input} secureTextEntry={true}  placeholder="* * * * * * * *" /> 
            </View>
            <View style={styles.email}>
            <Text style={{fontWeight:'700' , fontSize:16,color:colors.Orange , marginVertical:3}}>Numéro de télephone</Text>
            <TextInput placeholderTextColor={'#7F7F7F'} style={styles.input} selectTextOnFocus={true}  placeholder="+221 77 807 24 45" />
            </View>
            <View style={styles.email}>
            <Text style={{fontWeight:'700' , fontSize:16,color:colors.Orange , marginVertical:3}}>Pays de résidence</Text>
            <TextInput placeholderTextColor={'#7F7F7F'} style={styles.input} selectTextOnFocus={true}  placeholder="mastou@gmail.com" />
            </View>
            <LinearGradient colors={['#33B5FF', '#33D4FF']} style={{borderRadius:150 , marginVertical:20 , width:'75%',shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <TouchableOpacity  style={styles.button}>
        <Text style={{color:colors.Blanc, fontSize:16, fontWeight:'700'}}>Valider les modifications</Text>
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
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:15

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
  },
  email:{
    display:'flex',
    marginTop:20
  },
  password:{
    display:'flex',
    marginTop:20
  },
  input: {
    height: 40,
    borderTopWidth:0,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomColor:'grey',
    borderWidth: 1,
    paddingHorizontal:0,
    paddingVertical:10,
    color:'black'
  },
});
