import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity , Image , TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../themes/color';

export default function SigninScreen( { navigation }) {
  
  return (
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{ x: 0, y: 0}}
    end={{x: 0.5, y: 0.3}}   style={styles.li}>
    <SafeAreaView style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
        <Image style={styles.tinyLogo} source={require('../assets/ICONE_LOGO.png') }/>
        <Text style={{fontSize:30,color:colors.Orange , marginVertical:5}}>Bienvenue sur</Text>
        <Text style={{fontSize:40,color:colors.Blanc }}>VIDEOPOSITIVE</Text>
        
        </View>
        <View style={styles.forms}>
            <View style={styles.email}>
            <Text style={{fontSize:14,color:colors.Orange , marginVertical:5}}>Email</Text>
            <TextInput placeholderTextColor={'white'} style={styles.input} selectTextOnFocus={true}  placeholder="mastou@gmail.com" />
            </View>
            <View style={styles.password}>
            <Text style={{fontSize:14,color:colors.Orange , marginVertical:5}}>Mot de passe</Text>
            <TextInput placeholderTextColor={'white'} style={styles.input} secureTextEntry={true}  placeholder="* * * * * * * *" /> 
            </View>
        </View>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:15 }}>
            <Text style={{color:colors.Orange, fontSize:14}}>Mot de passe oublié ?</Text>
            <View style={{marginTop:20 , width:200, }}>
        <LinearGradient colors={['#EA5B0C', '#F39200']} style={{borderRadius:150 ,}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.button}>
        <Text style={{color:colors.Blanc, fontSize:16, fontWeight:'700'}}>Connexion</Text>
      </TouchableOpacity>
        </LinearGradient>
        </View>
        </View>
        <View style={{marginTop:35, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('categorie')}>
          <Text style={{color:colors.Orange}}>Pas encore membre ?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('inscription')}>
          <Text style={{color:colors.Blanc , fontSize:16 , fontWeight:'400',marginVertical:5}}>Créez un compte gratuitement</Text>
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
    marginTop:80,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    
  },

  tinyLogo: {
    width: 100,
    height: 100,
  },
  forms:{
    marginTop:45
  },

  email:{
    display:'flex'
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
