import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from './src/components/Logo';
import styled from 'styled-components';
import { useState } from 'react';
import ButtonConverter from './src/components/ButtonConverter';
import ConverteAPI from './src/api/ConverteAPI';
import api from './src/api/ConverteAPI';

const logoPath = require('./assets/images/dinheiro.png');


export default function App() {

  const valorReal = (valor)=>{
    const valorTratado = valor.replace(/[^0-9]/g,"");
    setValor(valorTratado);
  };

  const [valor, setValor] = useState("");
  const [valorConvertido, setValorConvertido] = useState("");

  async function converterValor(){ 
    if(valor == ""){
      Alert("Digite um valor!");
      return;
    }

    try {
        const response = 4.9068
        setValorConvertido(String(Number(valor) * response));
        
    } catch (error) {
        Alert(error);
        
    }

}

  return (
    <Container>
      <SectionContainer>
        <Logo placeholderImagePath={logoPath} />
        
        <Inputvalor keyboardType="number-pad" value={valor} onChangeText = {(texto=>setValor(texto))}/>
        

        <TextResultado editable={false} value={valorConvertido}/>
      </SectionContainer>
      

      <ButtonConverter onPressFunc={converterValor} label={'Converter'}/>

      <StatusBar style="auto" />
    </Container>
  );
}


const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
`;



const Inputvalor = styled.TextInput`
  margin: 20px 0;
  width: 320px;
  height: 64px;
  border: 2px solid #000000;
  border-radius: 18px;
  text-align: center;
  font-size: 16px;
`;

const TextResultado = styled.TextInput`
  margin: 20px 0;
  width: 320px;
  height: 64px;
  border: 2px solid #000000;
  border-radius: 18px;
  text-align: center;
  font-size: 20px;
  color: #000000;
  font-weight: 600;

`;

const SectionContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
