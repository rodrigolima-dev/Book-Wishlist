import { Text, View } from 'react-native';
import { Container, Name, Price, Button, CenterView, ButtonText } from './styles';

export default function Books( { data } ) {
  return (
    <Container>
      <Name>{data.id} - {data.name} </Name>
      <Price> R$ {data.price} </Price>

      <CenterView>
        <Button onPress={ ( ) => { } }>
          <ButtonText> Edit </ButtonText>
        </Button>

        <Button onPress={ ( ) => { } }>
          <ButtonText> Delete </ButtonText>
        </Button>

      </CenterView>
    </Container>
  );
}
