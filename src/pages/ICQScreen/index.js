import React, { useState } from "react";
import { Container, Title, Result } from "./style";

import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

export default function ICQScreen () {
  const [cintura, setCintura] = useState("");
  const [quadril, setQuadril] = useState("");
  const [icq, setIcq] = useState("");

  function calcularIcq() {
    let icq = Number(cintura) / Number(quadril);
    setIcq(icq.toFixed(2));
  }

  return (
    <Container>
      <Title>Calcular o ICQ</Title>

      <MyInput 
        myPlaceholder="Cintura em cm" 
        value={cintura} 
        onChangeText={setCintura} 
      />

      <MyInput 
        myPlaceholder="Quadril em cm" 
        value={quadril} 
        onChangeText={setQuadril} 
      />

      <MyButton title="Calcular" onPress={() => calcularIcq()} />

      <Result>O ICQ é: {icq}</Result>
      
    </Container>
  );
}
