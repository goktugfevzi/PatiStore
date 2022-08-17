import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2.2,
        height: Dimensions.get('window').height / 2.5,
        backgroundColor: '#eceff1',
        borderRadius: 10,
        marginBottom:10,
        marginRight:10,
    },
    image_containter:{
        height: Dimensions.get('window').height/4.5,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    image: {
        flex:1,
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color:'black',
    },
    price: {
        marginTop: 3,
    },
    inStock: {
        fontStyle: 'italic',
        textAlign: 'right',
    },
    inner_container: {
        padding: 10,
        
    },
    inner_container_text: {
        paddingTop: 5,
        
    },
    stock:{
        marginTop:5,
        marginBottom:5,
        fontWeight: 'bold',
        fontSize: 12,
        color:'red',
    },
}
);