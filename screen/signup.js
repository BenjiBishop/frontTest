
import { StyleSheet, Text, View , TouchableOpacity , Image , TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../themes/color';
import { useState,useEffect } from 'react';
// import fetchUser from '../services/fetchUser';
import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';
import axios from 'axios';



export default function SignupScreen( { navigation }) {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  
  async function registerUser (event) {
    event.preventDefault()
    axios.post('http://127.0.0.1:8000/api/register', {
      name: name,
      email: email,
      password : password
    })
    .then(function (response) {
      console.log(response);
      () => navigation.navigate('signin')
    })
    .catch(function (error) {
      console.log(error);
    });


  }

  
   return (
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{ x: 0, y: 0}}
    end={{x: 0.5, y: 0.3}}   style={styles.li}>
    <SafeAreaView style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
        <Image style={styles.Logo} source={require('../assets/membre.png') }/>
        <Text style={{fontSize:40,color:colors.Verte,marginTop:5 }}>Espace membre</Text>
        
        </View>
        <View style={styles.forms}>
        <View style={styles.email}>
            <Text style={{fontSize:14,color:colors.Verte , marginVertical:3}}>Nom d'utilisateur</Text>
            <TextInput value ={name} onChange = {(e)=>{setName(e.target.value)} } placeholderTextColor={'white'} style={styles.input} selectTextOnFocus={true}  placeholder="" />
            </View>
            <View style={styles.email}>
            <Text style={{fontSize:14,color:colors.Verte , marginVertical:3}}>Email</Text>
            <TextInput value ={email} onChange = {(e)=>{setEmail(e.target.value)} } placeholderTextColor={'white'} style={styles.input} selectTextOnFocus={true}  placeholder="" />
            </View>
            <View style={styles.password}>
            <Text style={{fontSize:14,color:colors.Verte , marginVertical:3}}>Mot de passe</Text>
            <TextInput value ={password} onChange = {(e)=>{setPassword(e.target.value)} } placeholderTextColor={'white'} style={styles.input} secureTextEntry={true}  placeholder="* * * * * * * *" /> 
            </View>
        </View>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:15 }}>
           
            <View style={{marginTop:20 , width:200, }}>
        <LinearGradient colors={['#33B5FF', '#33D4FF']} style={{borderRadius:150 ,}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <TouchableOpacity style={styles.button}  onPress={registerUser}>
        <Text style={{color:colors.Blanc, fontSize:16, fontWeight:'700'}} >Inscription</Text>
      </TouchableOpacity>
        </LinearGradient>
        </View>
        </View>
        <View style={{marginTop:35, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:colors.Orange}}>Déjà membre ?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('signin') } >
          <Text style={{color:colors.Blanc , fontSize:18 , fontWeight:'400',marginVertical:5}}>Se connecter.</Text>
          </TouchableOpacity>
        </View>
        
        </ScrollView>
    
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  li: {
    flex: 1,
    alignItems:'center',

  },
  header:{
    marginTop:50,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    
  },

  Logo: {
    width: 100,
    height: 100,
    marginBottom : 4 
  },
  forms:{
    marginTop:30
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
    borderBottomColor:'white',
    borderWidth: 1,
    paddingHorizontal:0,
    paddingVertical:10,
    color:'white'
  },
  button: {
    alignItems: "center",
    padding: 10,
    
  },
});
