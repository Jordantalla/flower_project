import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView, ImageFlatList, Button,Image } from 'react-native';
import Buttom from './compo/Buttom';
//import dashboardStyle from'./style.js';
//import Buttom  from './composantes/Buttom';

export default function App() {
  const cliquer= () => {
    alert('info !');
  }
  return (

    <ScrollView>
    {/* header */}
    
          <View>
            <Text style={styles.header}>votre cycle est-il régulier? </Text>
            <Text style={styles.pheader}>(ne varie pas de plus de 7 jours) </Text>
            <Text style={styles.pheader}> </Text>
            <Text style={styles.pheader}> </Text>
            {/* <Image style={styles.image} source={require('./src/icon_profile.png') }
            /> */}
            
    {/* fin header */}
          </View>
    
    
          <View style={styles.container}>
    
        <Buttom style={styles.buttom2} labelButtom= "j'ai un cycle regulier" onpress={cliquer}/>
        <Buttom style={styles.buttom2} labelButtom= "je n'ai pas un cycle irrégulier" onpress={cliquer}/>
        <Buttom style={styles.buttom2} labelButtom= "cycle irregulier" onpress={cliquer}/>
        <Buttom style={color='red'} labelButtom= "suivant" onpress={cliquer}/>
    </View>

    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    // backgroundColor: 'blue',
    marginTop:40,
    textAlign:'center',
    fontSize:23,
    fontWeight:'bold',
    color:'#744861',
  },
  pheader:{
    // backgroundColor: 'blue',
    textAlign:'center',
    fontSize:18,
    letterSpacing:1/2,
    marginTop:15,
    color:'#744861',
    
  },

  buttom2:{
   
    marginBottom:55,
    width:15,
    borderRadius:12,
    color:'#744861',
    letterSpacing:2
    
    
  },

  valider:{
   
    marginBottom:55,
    width:15,
    borderRadius:20,
    color:'#744861',
    letterSpacing:2,
    backgroundColor:'red',
    
    
    
  },

 
  // image:{
  //   width:50,
  //   height:50, 
  //   borderRadius:50 / 2,  
  //   left:270,
  //   top:-20,
  // }
});
