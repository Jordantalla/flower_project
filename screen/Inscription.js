import React from 'react';
import {View, StyleSheet} from 'react-native';

const Inscription = ({navigation}) => {

    //definition des variables à utilisées
    const [id,setId] =useState('')
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [confirmp, setConfirmp]=useState('');
    const [selected, setSelected]=useState('');

    const [tnom, setTnom] = useState(false);
    const [temail, setTemail] = useState(false);
    const [tpassword, setTPassword] = useState(false);
    const [tconfirmp, setTconfirmp] =useState(false);

   
   

    //definition des fonctions à utilisées
    const nextPageIN = ()=>{
        navigation.navigate('connexion')
    }
    
       


    const Client=()=>{
        navigation.navigate('accueil')
    }

    const verification = ()=>
{

        let correct=true;

        if (nom==''){
            setTnom(true)
            alert('veuillez verifier les données entrées!')
            correct= false;

        } else{ setTnom(false)}

        if (email=='' ){
            setTemail(true)
            alert('veuillez verifier les données entrées!')
            correct= false
        } else if (email.indexOf('@gmail')==-1){ setTemail(true) 
            alert('veuillez verifier les données entrées!')
            correct= false;}
        else{ setTemail(false)}

        if (password==('')){
            setTPassword(true)
            alert('veuillez verifier les données entrées!')
            correct= false
        }
        else if (password.length<8) { setTPassword(true) 
            alert('veuillez verifier les données entrées!')
            correct= false;}

        else { setTPassword(false)}

        if(confirmp !== password) {
            setTconfirmp(true)
            alert('veuillez verifier les données entrées!')
            correct= false;
        }else {setTconfirmp(false)}

        if (selected != 1 && selected !=2 &&selected !=3){ setTselected(true) 
            alert('veuillez verifier les données entrées!')
            correct= false;} else { setTselected(false)}
    
        if(correct){
            
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
           <Icon name='account-plus' style={{fontSize:40, color:'darkblue'}}></Icon>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.view2}>
                    <View style={[styles.textInput,{flexDirection:'row',}]}><Icon name='account' style={{color:'white',textAlignVertical:'center', fontSize:30, marginRight:20}}/><TextInput placeholder="Nom"  value={nom} onChangeText={text => setNom(text)} style={{flex:1}} /></View>
                    
                    {tnom && <Text  style={{marginBottom:10, color:'red'}}>veuillez remplir ce champ</Text>}
                    <View style={[styles.textInput,{flexDirection:'row',}]}><Icon name='email' style={{color:'white',textAlignVertical:'center', fontSize:30, marginRight:20}}/><TextInput placeholder='Email'value={email} onChangeText={text=>setEmail(text)} style={{flex:1}} />
                    </View>
                    {temail && <Text  style={{marginBottom:10, color:'red'}}>vérifier l'email</Text>}
                    <View style={[styles.textInput,{flexDirection:'row',}]}><Icon name='key' style={{color:'white',textAlignVertical:'center', fontSize:30, marginRight:20}}/><TextInput placeholder='Mot de passe'value={password}secureTextEntry={false} onChangeText={text=>setPassword(text)} style={{flex:1}}/>
                    </View>
                    {tpassword && <Text  style={{marginBottom:10, color:'red'}}>verifier le mot de passe(au moins 08 caractères)</Text>}
                    <View style={[styles.textInput,{flexDirection:'row',}]}><Icon name='key' style={{color:'white',textAlignVertical:'center', fontSize:30, marginRight:20}}/><TextInput placeholder='Confirmez le mot de passe'value={confirmp} onChangeText={text=>setConfirmp(text)} style={{flex:1}}/>
                    </View>
                    {tconfirmp && <Text  style={{marginBottom:10, color:'red'}}>veuillez confirmer le mot de passe</Text>}
                    
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
                        flex:2}}    onPress={verification}><Text style={{color:'#ED7906', fontWeight:'bold',fontSize:20}}>S'inscrire</Text></TouchableOpacity>
                        <View style={{flexDirection:'row',marginTop:10,justifyContent:'center'}}><Text>Avez-vous déja un compte?</Text><Text style={{color:'blue', fontWeight:'bold'}} onPress={nextPageIN}> Se connecter</Text></View>
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
        marginBottom:5,
        flex:2
              
    },
    nameTest:{
        fontSize:30,
        fontWeight:'bold'
    }
});

export default Inscription;

