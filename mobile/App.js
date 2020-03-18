import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [aleatorio, setAleatorio] = useState([]);

  const gerarAleatorio = () => {
    let sorte = [];
    for(let i = 0; i < 6; i++){
      let resultado = Math.floor(Math.random() * 60)
      sorte.push(resultado);
    }
    setAleatorio(sorte);
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gere o seu numero da sorte e fique rico!</Text>
      <Text style={styles.text}>{aleatorio.toString()}</Text>
      <Button style={styles.btn} title="Gerar numero da sorte" onPress={() => gerarAleatorio()}/>
      <Button style={styles.btn} title="Zerar jogo" onPress={() => setAleatorio([])}/>
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
  text: {
    marginBottom: 10,
    fontSize: 16,
    color: '#001d',
    textTransform: 'uppercase',
    padding: 10,
    fontWeight: '300'
  },  
});
