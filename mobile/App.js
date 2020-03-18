import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [aleatorio, setAleatorio] = useState([null])
  
  
  const gerarAleatorio = () => {
    for(let i = 0; i<= 6; i++){
      
      let resultado = Math.floor(Math.random() * 60)
      setAleatorio([...aleatorio, resultado])
    }
  }
  const sorte = aleatorio.map((item) => item)

  const zerarNumeros = () =>{
    setAleatorio([null])
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{sorte}</Text>
      <Button title="Gerar numero da sorte" onPress={() => gerarAleatorio()}/>
      <Button title="Zerar jogo" onPress={() => zerarNumeros()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
