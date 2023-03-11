import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Connexion from './screen/Connexion';
import Inscription from './screen/Inscription';
import Accueil from './screen/Accueil';


export default function App() {
 
 const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Connexion'>
        <Stack.Screen name=" Connexion" component = {Connexion} options = {{headerShown:false}}/>
        <Stack.Screen name=" Inscription" component = {Inscription} options = {{headerShown:false}}/>
        <Stack.Screen name=" accueil" component = {Accueil} options = {{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
