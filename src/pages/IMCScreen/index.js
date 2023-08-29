import React, { useState } from "react";
import { Container, Title, Result } from "./style";

import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

export default function IMCScreen () {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  function calcularImc() {
    let imc = Number(peso) / Number(altura)**2;
    setImc(imc.toFixed(2));
  }

  return (
    <Container>
      <Title>Calcular o IMC</Title>

      <MyInput 
        myPlaceholder="Peso em Kg" 
        value={peso} 
        onChangeText={setPeso} 
      />

      <MyInput 
        myPlaceholder="Altura em m" 
        value={altura} 
        onChangeText={setAltura} 
      />

      <MyButton title="Calcular" onPress={() => calcularImc()} />

      <Result>O IMC é: {imc}</Result>
      
    </Container>
  );
}
