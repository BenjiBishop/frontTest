import { StyleSheet, Text, View , TouchableOpacity , Image , FlatList} from 'react-native';
import colors from '../themes/color';
import imagepreview from '../data/datavideo';

const Item = ({ title , image, prix , navigation }) => (
    <View style={styles.item}>
       <View>
       <Image style={{width:200, height: 200  }} source={{uri:image }}></Image>
       <Image style={{width:60, height: 60 , position:'absolute', top:70 , left:50 }} source={require('../assets/ICONE_LOGO.png') }></Image>
       </View>
        <View style={{width:'100%'}}>
          <View style={{display:"flex", flexDirection:'row', justifyContent :'space-between' , marginVertical:2}}>
          <Text style={{ color:colors.Noir }}>{title} </Text>
          <Text style={{ color:colors.Orange }}>{prix} </Text>
          </View>
          <View style={{display:'flex' , flexDirection:'row', justifyContent:'space-between', backgroundColor:'ghostwhite' , paddingVertical:1}}>
          <TouchableOpacity onPress={() =>navigation.navigate('player')} >
          <Image style={{width:30, height: 30}} source={require('../assets/BOUTON_PLAY_ORANGE.png') }></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={{width:30, height: 30}} source={require('../assets/BOUTON_PANIER_ORANGE.png') }></Image>
          </TouchableOpacity>
         
         <TouchableOpacity onPress={() => navigation.navigate('playlist')}>
         <Image style={{width:30, height: 30}} source={require('../assets/BOUTON_AJOUT_VIDEO_DANS_PLAYLIST_ORANGE.png') }></Image>
         </TouchableOpacity>
          <Image style={{width:30, height: 30}} source={require('../assets/BOUTON_PARTAGE_ORANGE.png') }></Image>
          </View>
        </View>
    </View>
  );

export default function Bienetrecomponent({navigation} ){
    const renderItem = ({ item }) => (
        <Item title={item.nom} image={item.imageurl} prix={item.prix} navigation={navigation}   />
        
      );
    return(
        <View style={{ backgroundColor:'white', paddingHorizontal:10}}>
            <View style={{display:'flex', alignItems:'center', justifyContent:'space-between' , flexDirection:'row'}}>
           <TouchableOpacity >
             <Text style={{color:'black',marginBottom:5 , fontSize:16 }} >Bien-être</Text>
           </TouchableOpacity>
            <Text style={{color:'black',marginBottom:5 , borderBottomColor: colors.Orange , fontSize:16 , paddingBottom:2, borderBottomWidth:3 }} >Voir tout</Text>
            </View>
            <View>
            <FlatList horizontal={false}
        data={imagepreview}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />     
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
   
    item: {
       height:270,
        marginHorizontal:5
     
    },
    title: {
      fontSize: 16,
    },
  });