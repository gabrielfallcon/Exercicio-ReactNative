import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Texto inicial")
  const [contador, setContador] = useState(0)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{outputText}</Text>
      <Button title="Alterar texto" onPress={() => setOutputText("Texto novo")}/>
      <Text>{contador}</Text>
      <Button title="Alterar texto" onPress={() => setContador(contador + 1)} />
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
