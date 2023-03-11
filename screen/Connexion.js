import React from 'react';
import { useState } from 'react';
import {View, StyleSheet,Text, TextInput, ScrollView, TouchableOpacity, Alert, StatusBar} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*import SelectList from 'react-native-dropdown-select-list';*/




const Connexion = ({navigation}) => {
    //definition des variables utilisées
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
   
    const [temail, setTemail] = useState(false);
    const [tpassword, setTPassword] = useState(false);

    //definition des fonctions utilisées
    const Client=()=>{
        navigation.navigate('accueil')
    }

    const nextPageUP = ()=>{
        navigation.navigate('Inscription')
    }   
   
    const verification = ()=>{

       
            let correct=true;
       
        if (email=='' ){
            setTemail(true)
            correct= false
        } else if (email.indexOf('@gmail')==-1){ setTemail(true) 
            correct= false;}
        else{ setTemail(false)}

        if (password==('')){
            setTPassword(true)
            correct= false
        }
        else if (password.length<8) { setTPassword(true) 
            correct= false;}

        else { setTPassword(false)}

        if (correct){

            alert('connexion réussie')
            Client()

            
        }

       
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='rgba(38,147,194,1)'></StatusBar>
            <View style={[styles.view1,{flexDirection:'row',}]}>
                <Text style={[styles.nameTest, {color:'#0716A3'}]}>Easy</Text> 
                <Text style={[styles.nameTest,{color:'#ED7906'}]}>Home</Text>
           </View>
            <View><Icon name='account-circle' style={{color:'#0716A3', fontSize:100}} /></View>
            <ScrollView>
                <View style={styles.view2}>
                    
                    <View style={[styles.textInput,{flexDirection:'row',}]}><Icon name='email' style={{color:'white',textAlignVertical:'center', fontSize:30, marginRight:20}}/><TextInput placeholder='Email'value={email} onChangeText={text=>setEmail(text)} style={{flex:1}} />
                    </View>
                    {temail && <Text  style={{marginBottom:10, color:'red'}}>vérifier l'email</Text>}
                    <View style={[styles.textInput,{flexDirection:'row',}]}><Icon name='key' style={{color:'white',textAlignVertical:'center', fontSize:30, marginRight:20}}/><TextInput placeholder='Mot de passe'value={password}secureTextEntry={false} onChangeText={text=>setPassword(text)} style={{flex:1}}/>
                    </View>
                    {tpassword && <Text  style={{marginBottom:10, color:'red'}}>verifier le mot de passe(au moins 08 caractères)</Text>}
                   
                    
                    <TouchableOpacity style={{ 
                        height:50,
                        width: '60%',
                        alignSelf:'center',
                        backgroundColor:'#ADD8E6',
                        borderWidth:1,
                        paddingLeft:5,
                        borderRadius:17,
                        marginTop:15,
                        alignItems:'center',
                        justifyContent:'center',
                        flex:2}}    onPress={verification}><Text style={{color:'#ED7906', fontWeight:'bold',fontSize:20}}>Se connecter</Text></TouchableOpacity>
                        <View style={{flexDirection:'row',marginTop:10,justifyContent:'center'}}><Text>Vous ne possedez pas de compte?</Text><Text style={{color:'blue', fontWeight:'bold'}} onPress={() => navigation.navigate('Inscription')}> S'inscrire</Text></View>
                </View>

                <View>
                    <Text></Text>
                </View>
            </ScrollView>
            
        
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
                      
    },

    view1:{
        height:'20%',
        width: '100%',
        backgroundColor:'rgba(38,147,194,0.6)',
        borderBottomRightRadius:50,
        marginBottom:30,
        justifyContent:'center',
        alignItems:'center'
        
    },

    view2:{
        flex:2,
        marginTop: 10

    },

    textInput:{
        width:325,
        height:50,
        backgroundColor:'#ADD8E6',
        borderWidth:1,
        paddingLeft:5,
        borderRadius:17,
        marginBottom:15,
        flex:2
              
    },
    nameTest:{
        fontSize:30,
        fontWeight:'bold'
    }
});

export default Connexion;

