import { Container, Title } from "./style";

import MyButton from "../../components/MyButton";

export default function HomeScreen ({ navigation }) {
  return (
    <Container>
      <Title>Tela Principal</Title>

      <MyButton title="Calcular o IMC" onPress={() => navigation.navigate("IMCScreen")} />
      <MyButton title="Calcular o ICQ" onPress={() => navigation.navigate("ICQScreen")} />

    </Container>
  );
}
