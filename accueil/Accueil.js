import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Connexion from './Connexion';

const Accueil = ({navigation}) => {

    const verification =()=>{ navigation.navigate('Connexion')};
    
    return (
        <View>
            <View><Text style={styles.welcome}> Bienvenue sur flowers, votre application de gestion du cycle</Text>
            </View>
            <View>
                <Image></Image>
            </View>
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
            
        </View>
    );
}

const styles = StyleSheet.create({
    welcome:{
        color:'pink',
        fontSize:12,
        fontStyle:'bold'
    }

})

export default Accueil;
