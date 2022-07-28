import React, { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity , FlatList, Image , TextInput, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import colors from '../themes/color';
import Categorie from './../data/categorie';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
    </TouchableOpacity>
  );
export default function CategorieScreen(props) {
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colors.Orange : 'ghostwhite';
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        );
      };
    const [selectedId, setSelectedId] = useState('1');
    return (
        <View style={{  height:50, }}>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
            
        </View>
    )
}
const styles = StyleSheet.create({
  
    item: {
      
      paddingHorizontal:10,
      alignItems:'center',
      justifyContent:'center',

    },
    title: {
      fontSize: 15,
      fontWeight:'600'
    },
  });