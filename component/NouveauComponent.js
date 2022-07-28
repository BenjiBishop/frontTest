import { StyleSheet, Text, View , TouchableOpacity , Image  } from 'react-native';

export default function NouveauComponent(){
    return(
        <View style={{ backgroundColor:'white',  paddingHorizontal:10}}>
            <Text style={{color:'black',marginBottom:5 ,fontSize:16 }} >BIENTOT</Text>
          
            <View>
                <Image style={{width:100, height: 200}} resizeMode='cover' source={{uri:'https://img5.cdn.cinoche.com/images/887c4446fbb2a9bbd941a4272ad61b93.jpg'}} > 
                </Image>        
            </View>
        </View>
    )
}