import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity ,Pressable, Image ,ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Popover } from 'react-native-popper';
import { AntDesign } from '@expo/vector-icons';

import colors from '../themes/color';

export default function Headerscreen(props) {
    return(
        
        <View style={styles.contain}>
           <View style={{display:"flex" , flexDirection:"column", width:'65%' }}>
           <TouchableOpacity>
            <Text style={{color:colors.Verte, fontSize:16, fontWeight:'600' , marginBottom:2}}>Espace Membre</Text>
            </TouchableOpacity>
            <View style={{display:"flex" , justifyContent:"space-between", alignItems:"center",  flexDirection:"row"}}>
            <Popover
        placement="bottom left"
        trigger={
          <Pressable style={{ height: 26, width: 24 }}>
             <Image style={{ width:30, height:30}} source={require('../assets/TROIS_TRAITS_HORIZONTAL_BLANCS.png')}></Image>
          </Pressable>
        }
        offset={7}
      >
        <Popover.Backdrop />
        <Popover.Content>
        <MyPopoverView  />
        </Popover.Content>
            </Popover>
            <View >
            <Text style={{color:colors.Blanc ,textAlign:"center", fontSize:20 , fontWeight:"700"}}>{props.name} </Text>
           </View>
            </View>
      
           </View>
          
          
        </View>
     
    )
}

export function MyPopoverView({ navigation }) {
    return (
      <View style={[styles.boxShadow, styles.shadow]}>
        <ScrollView>
          <View style={[styles.row, styles.justifyBetween, styles.header2]}>
           <View style={{marginRight:8}}>
           <LinearGradient  colors={['#EA5B0C', '#F39200']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.pp}  >
              <View >
                  <Image style={{width:40, height:40 }} source={require('../assets/user.png')} ></Image>
              </View>    
              </LinearGradient>
           </View>
           <View style={{display:'flex', flexWrap:'wrap' }}>
           <Text style={{ fontWeight: 'normal', color: '#1F2937' }}>
              Bienvenue
            </Text>
            <Text style={{ fontWeight: 'bold', color: '#1F2937' }}>
              Mignzii99
            </Text>
           </View>
           
          </View>
          <Spacer width={'98%'} height={2} />
          <TouchableOpacity>
            <View style={[styles.row, styles.justifyBetween, styles.header]}>
            <View style={{marginRight:5}} >
                  <Image style={{width:25, height:25 }} source={require('../assets/decon.jpg')} ></Image>
              </View>
              <Text style={{fontSize:16, color: '#1F2937' }}>Profil</Text>
            </View>
          </TouchableOpacity>
          <Spacer width={'98%'} height={2} />
          <TouchableOpacity>            
          </TouchableOpacity>
          <Spacer width={'98%'} height={2} />
          <TouchableOpacity>
            <View style={[styles.row, styles.justifyBetween, styles.header]}>
            <View style={{marginRight:5}} >
                  <Image style={{width:25, height:25 }} source={require('../assets/decon.jpg')} ></Image>
              </View>
              <Text style={{fontSize:16, color: '#1F2937' }}>Déconnexion</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
  
  
  const Spacer = ({ height, width }) => {
    return (
      <View
        style={{
          height: height,
          backgroundColor: '#F3F4F6',
          width: width ?? '100%',
          marginHorizontal: 'auto',
        }}
      ></View>
    );
  };
  const styles = StyleSheet.create({
    contain:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingHorizontal:20,
        marginVertical:10
        
       },
    row: { flexDirection: 'row' },
    justifyBetween: { justifyContent:'flex-start' , alignItems:'center' },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    },
    pp:{
      height:40,
      width:40,
      borderRadius:100,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    boxShadow: {
      minWidth: 250,
      borderRadius: 5,
      // borderColor: '#F3F4F6',
      // borderWidth: 1,
      backgroundColor: '#fff',
      maxHeight: 300,
    },
    boxShadow2: {
      minWidth: 120,
      borderRadius: 5,
      backgroundColor: '#fff',
      maxHeight: 130,
    },
    header: {
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
    header2: {
      paddingLeft: 25,
      paddingVertical: 15,
      paddingRight:10
    },
  });
  