import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
margin:7,
padding:5,
borderRadius:5,


    },
    image:{
        height:Dimensions.get("window").height / 4,
borderTopRightRadius:10,
borderTopLeftRadius:10,

    },
    title:{
        fontSize:16,
        fontWeight:"bold"

    },
    description:{

    },
    innercontainer:{
        margin:12,
        padding:5,
        width:160,
        height:80,

    },
    price:{
        padding:10,
        fontStyle:"italic",
        textAlign:"right",
    }

    
  
})
