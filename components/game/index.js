import { View, Text, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import styles from './styles';
import { useState } from 'react';



export default function Game() {
    const emptyMap = [
{id: 1, value: false, press: false}, {id: 2,  value: false,  press: false} , {id: 3,  value: false, press: false} , 
{id: 4,  value: false, press: false} , {id: 5,  value: false, press: false} , {id: 6,  value: false, press: false} , 
{id: 7, value: false,  press: false} , {id: 8,  value: false, press: false} , {id: 9,  value: false, press: false} , 

                 ]
    const [turno, setTurno] = useState(1);
    const [map, setMap] = useState(emptyMap);
    const [winner, setWinner] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(true);
 
    function updateMap(index){
        console.log(turno)
            const newMap = map.map(element => {
                if((element.id == index+1)  && (element.value == false)){
                    element.press = true;
                    setTurno(turno + 1)
                if(turno % 2 == 0){
                    return {
                        ...element,
                        value: 'O',
                    }
                }
                else{
                    return {
                        ...element,
                        value: 'X',
                    }
                }
            }
            else{
                return element
            }
            }
            );
            setMap(newMap);
            check_win(newMap)
            
    }

    function check_win(map){
        //
        if(map[0].value == map[1].value && map[0].value == map[2].value && typeof map[0].value != "boolean"){
            setWinner(map[0].value + ' Venceu!')
            setButtonDisabled(false)
        } 
        else if(map[0].value == map[4].value && map[0].value == map[8].value && typeof map[0].value != "boolean"){
            setWinner(map[0].value + ' Venceu!')
            setButtonDisabled(false)

        } 
        else if(map[0].value == map[3].value && map[0].value == map[6].value && typeof map[0].value != "boolean"){
            setWinner(map[0].value + ' Venceu!')
            setButtonDisabled(false)

        } 
        else if(map[1].value == map[4].value && map[1].value == map[7].value && typeof map[1].value != "boolean"){
            setWinner(map[1].value + ' Venceu!')
            setButtonDisabled(false)

        } 
        else if(map[2].value == map[5].value && map[2].value == map[8].value && typeof map[2].value != "boolean"){
            setWinner(map[2].value + ' Venceu!')
            setButtonDisabled(false)

        } 
        else if(map[3].value == map[4].value && map[3].value == map[5].value && typeof map[3].value != "boolean"){
            setWinner(map[3].value + ' Venceu!')
            setButtonDisabled(false)

        } 
        else if(map[6].value == map[7].value && map[6].value == map[8].value && typeof map[6].value != "boolean"){
            setWinner(map[6].value + ' Venceu!')
            setButtonDisabled(false)

        } 
        else if(map[6].value == map[4].value && map[6].value == map[2].value && typeof map[6].value != "boolean"){
            setWinner(map[6].value + ' Venceu!')
            setButtonDisabled(false)

        } 
        else{
            if(turno == 9){
                setWinner("EMPATE!")
                setButtonDisabled(false)
            }
        }
    }

    function new_Game(){
        setTurno(1)
        setMap(emptyMap)
        setWinner("")
        setButtonDisabled(true)

    }
    
  return (
    <View style={styles.container}>
        <Text style={styles.winner_text}>{winner} </Text>
    <View style={styles.first_line}>
        {map.map((element,index)=>{
            return(
                <Pressable disabled={element.press} key={index} android_disableSound={true} onPress={() => {updateMap(index);}} 
                    style={styles.button}><Text style={styles.values}>{element.value}</Text></Pressable>    
           );
       })
       }
       </View>  
       <Pressable onPress={()=> new_Game()} disabled={buttonDisabled} style={()=> {
                if(!buttonDisabled){
                    return styles.playAgain_button}
                else {return {opacity: 1}}}}>
        <Text style={[styles.playAgain_text, buttonDisabled && {opacity: 0}]}>Jogar novamente</Text></Pressable>


    </View>
  )
}