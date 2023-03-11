import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'

const Buttom = ({labelButtom, onpress}) => {
  return (
    <TouchableOpacity style={styles.buttom}
    
    onpress={onpress}
    >
      <Text> {labelButtom} </Text>
    </TouchableOpacity>
  )
}

export default Buttom

const styles = StyleSheet.create({
  buttom:{
    backgroundColor:'#ddd',
    height:45,
    width:200,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:3,
    marginTop:15,
    borderRadius:12,
    
  }
})