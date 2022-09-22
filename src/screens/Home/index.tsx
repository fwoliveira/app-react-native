import React from "react";
import { Text, View, TextInput,TouchableOpacity } from 'react-native';
import{styles} from './style'
import { Participant } from "../components/Participantes";
export  function Home() {
    
    function handleParticipantAdd(){
        console.log("voce clicou no botao +")
    }

    return (
    <View  style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}> Sexta, 4 de Novenbro de 2022 </Text>
    <View style={styles.forms}> 
         <TextInput
      style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor={'#6B6B6B'}
      //   keyboardType=""
      />
      <TouchableOpacity style={styles.button}
      onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>
      </View>
      <Participant name="William"/>
      <Participant name="Oliveira"/>
      <Participant name="Theo"/>
    </View>

  );
}
