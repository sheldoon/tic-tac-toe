import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    button:{
        backgroundColor: "#222222",
        width: 100,
        height: 100,
        marginHorizontal: '1%',
        margin: 10,
        marginVertical: 4,
        justifyContent: "center",
        alignItems: "center"
        
        
    },
    first_line:{
        flex: 3,
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        maxHeight: '100%',
        position: "absolute",
        top: 70,
      
        
        
    },
    container:{
        flex: 2,
        maxHeight: '70%',    
        top: 70,
        padding: 0,
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
        width: '98%',
        paddingHorizontal: 30,


    },
    values:{
        fontSize: 64,
        fontWeight: 'bold',
        color: "#00ff75",
        textShadowColor: "#00dada",
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
    },
    winner_text:{
        
        textAlign: "center",
        fontSize: 32,
        color: "#00de73",
        textShadowColor: "#14ff00",
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 4,
        zIndex: 1,
        top: -220,
    },
    playAgain_button:{
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: 197,
        height: 64,
        top: 460,
        backgroundColor: "#00de73",
        borderRadius: 15,

    },
    playAgain_text:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    }

})
export default styles