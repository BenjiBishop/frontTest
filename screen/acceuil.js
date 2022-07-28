
import { ScrollView, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../themes/color';
import Headerscreen from './../component/header';
import CategorieScreen from './../component/categorieComponent';
import Categorie from '../data/categorie';
import NouveauComponent from './../component/NouveauComponent';
import Bienetrecomponent from '../component/BienetreComponent';
import CultureComponent from '../component/CultureComponent';
import EcologieComponent from '../component/EcologieComponent';

export default function AccueilScreen( {navigation}) {
  
  return (
   
    <LinearGradient colors={['#3C3C3B', '#1D1D1B']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
  
    <SafeAreaView >
      <Headerscreen></Headerscreen>
      <ScrollView>
      <CategorieScreen data={Categorie} ></CategorieScreen>
     
      <NouveauComponent></NouveauComponent>
      <Bienetrecomponent  navigation={navigation}></Bienetrecomponent>
      <CultureComponent></CultureComponent>
      <EcologieComponent></EcologieComponent>
      </ScrollView>
    </SafeAreaView>
   
    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  
});
