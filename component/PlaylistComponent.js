import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity ,Pressable, Image ,ScrollView } from 'react-native';
import { Popover } from 'react-native-popper';
import colors from './../themes/color';
import { LinearGradient } from 'expo-linear-gradient';

function PlaylistComponent(props) {
  return (
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{ x: 0, y: 0}}
    end={{x: 0.5, y: 0.3}}   style={{marginLeft:8, marginVertical:5 , width:'30%' }}> 
        <View style={styles.firstelement}>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'flex-end' }}>
          <Popover
        placement="bottom right "
        trigger={
          <Pressable style={{ height: 26, width: 24 }}>
             <Image style={{ width:30, height:30}} source={require('../assets/TROIS_POINTS_BLANCS_VERTICAL.png')}></Image>
          </Pressable>
        }
      >
        <Popover.Backdrop />
        <Popover.Content>
        <MyPopoverView />
        </Popover.Content>
            </Popover>
          </View>
         <View style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
            <Image  style={{width:70 , height:70}} source={require('../assets/BOUTON_AJOUT_VIDEO_DANS_PLAYLIST_ORANGE.png')}  ></Image>
            <Text style={{color:colors.Blanc, fontWeight:'600' ,fontSize:15, textAlign:'center'}}>{props.name}</Text>
         </View>
        </View>
      </LinearGradient>
  )
}
export function MyPopoverView({ navigation }) {
  return (
    <View style={[styles.boxShadow2, styles.shadow]}>
    <ScrollView>
       <TouchableOpacity>
          <View style={[styles.row, styles.justifyBetween, styles.header]}>
          <View style={{marginRight:5}} >
                <Image style={{width:25, height:25 }} source={require('../assets/BOUTON_PLAY_ORANGE.png')} ></Image>
            </View>
            <Text style={{fontSize:14, color: '#1F2937' }}>Lire</Text>
          </View>
        </TouchableOpacity>
        <Spacer width={'98%'} height={2} />
        <TouchableOpacity>
          <View style={[styles.row, styles.justifyBetween, styles.header]}>
          <View style={{marginRight:5}} >
                <Image style={{width:25, height:25 }} source={require('../assets/BOUTON_SUPPRIMER_ORANGE.png')} ></Image>
            </View>
            <Text style={{fontSize:14, color: '#1F2937' }}>Supprimmer </Text>
          </View>
        </TouchableOpacity>
        <Spacer width={'98%'} height={2} />
        <TouchableOpacity>
          <View style={[styles.row, styles.justifyBetween, styles.header]}>
          <View style={{marginRight:5}} >
                <Image style={{width:25, height:25 }} source={require('../assets/ICONE_CRAYON_RENOMMER_ORANGE.png')} ></Image>
            </View>
            <Text style={{fontSize:14, color: '#1F2937' }}>Renommer  </Text>
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
const styles =StyleSheet.create({

     firstelement:{
       height:145, 
        shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 8,
       
     },
     shadowOpacity: 0.44,
     shadowRadius: 10.32,
     elevation: 16,
     paddingTop:5,
     
   },
   row: { flexDirection: 'row' },
    justifyBetween: { justifyContent:'flex-start' , alignItems:'center' },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
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

    boxShadow2: {
      maxWidth:120,
      borderRadius: 5,
      backgroundColor: '#fff',
      maxHeight: 130,
    },
    header: {
      paddingLeft: 5,
      paddingVertical: 5,
    },
   
  })

export default PlaylistComponent