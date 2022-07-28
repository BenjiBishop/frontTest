import { StyleSheet, Text, View , TouchableOpacity , Image , FlatList} from 'react-native';
import colors from '../themes/color';
import imagepreview from '../data/datavideo';

const Item = ({ title , image  }) => (
    <View style={styles.item}>
    
        <Image style={{width:150, height: 200}} source={{uri:image }}></Image>
        
    </View>
  );

export default function CultureComponent(){
    const renderItem = ({ item }) => (
        <Item title={item.categorie} image={item.imageurl}   />
      );
    return(
        <View style={{backgroundColor:'white', paddingHorizontal:10 }}>
            <View style={{display:'flex', alignItems:'center', justifyContent:'space-between' , flexDirection:'row'}}>
            <Text style={{color:'black',marginBottom:5 , fontSize:16 }} >Culture</Text>
            <Text style={{color:'black',marginBottom:5 , borderBottomColor: colors.Orange , fontSize:16 , paddingBottom:2, borderBottomWidth:3 }} >Voir tout</Text>
            </View>
            <View>
            <FlatList horizontal={true}
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
 
       height:200,
        marginHorizontal:5
     
    },
    title: {
      fontSize: 16,
    },
  });