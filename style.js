import { StyleSheet } from "react-native"
import { PADDING } from "../../outils/constates";

const dashboardStyle=StyleSheet.create({
    header:{
        // backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: PADDING.horizontal,
        paddingHorizontal: PADDING.vertical,
        backgroundColor: '#fe829e',
        marginTop:24,

    },

    userImg:{
         width:50,
         height:50, 
         borderRadius:50 / 2,  

    },

    userName:{
        fontSize: 13,
    },

   Button:{
   left:10,
    backgroundColor:'#ddd',
    alignItems:'center',
    justifyContent:'center',
    marginTop:35,
    width:300,
    height:45,


   }

});

export default dashboardStyle;