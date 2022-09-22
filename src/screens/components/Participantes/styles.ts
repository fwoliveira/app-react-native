import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container: {
      width:'100%',
      flexDirection:'row',
      backgroundColor: '#1f1e25',
      borderRadius:4,
      alignItems:'center',
      marginBottom:10,
    },
    name:{
        flex:1,
        fontSize:16,
        color:'#fff',
        marginLeft:16
    },
    button:{
        width:56,
        height:56,
        backgroundColor:'#E23C44',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
     },
     buttonText:{
        color:'#fff',
        fontSize:24,
     },

})