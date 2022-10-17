
import { ScrollView, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../themes/color';
import Headerscreen from './../component/header';
import CategorieScreen from './../component/categorieComponent';
import Categorie from '../data/categorie';
import Bienetrecomponent from '../component/BienetreComponent';


export default function AccueilScreen( {navigation}) {
  
  return (
   
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
  
    <SafeAreaView >
      <Headerscreen></Headerscreen>
      
      <CategorieScreen data={Categorie} ></CategorieScreen>
     
      <Bienetrecomponent  navigation={navigation}></Bienetrecomponent>
  
    </SafeAreaView>
   
    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  
});
