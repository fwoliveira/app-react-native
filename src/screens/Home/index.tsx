import React,{useState} from "react";
import { Alert, Text, View, TextInput,TouchableOpacity, FlatList } from 'react-native';
import{styles} from './style'
import { Participant } from "../components/Participantes";
export  function Home() {

    // const participants=['Eu']
    const[participants, setParticipants]= useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    
    function handleParticipantAdd(){
      if(participants.includes("William")){
        return Alert.alert ("participante existe","Ja existe um participante na lista com esse nome")
      }
      // participants.push('Ana');
      // console.log(participants)
      // setParticipants(['Ana']);
      //['eu'] => ['Ana']
      //prevState = conteudo atual do estado 
      setParticipants(prevState =>[...prevState, participantName]);
      //['Eu'] => ['Eu','Ana']
      setParticipantName('');
    
    }
    function handleParticipantRemove( name: string ){
        Alert.alert("Remover",`Remover o participante ${name} ?`,[
          {
            text:'Sim',
            onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
          },
          {
            text:'Não',
            style:'cancel'
          }
        ])
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
      onChangeText={setParticipantName}
      value={participantName}
      />
      <TouchableOpacity style={styles.button}
      onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.title}>Participantes</Text>
      <FlatList
        style={styles.flatListPart}
        data={participants}
        keyExtractor={(item)=> item}
        renderItem={({item})=> (
          <Participant name={item} key={item} onRemove={()=>handleParticipantRemove(item)} />
          
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() =>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda?  {'\n'}
            Adicione participantes a sua lista de presença.
          </Text>
        )}

      />
    </View>

  );
}
