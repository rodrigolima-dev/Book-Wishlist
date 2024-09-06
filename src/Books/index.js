
import React from 'react';
import { Container, Name, Price, Button, CenterView, ButtonText } from './styles';

export default function Books({ data, edit, exclude }) {
  return (
    <Container>
      <Name>{data.name} </Name>
      <Price> R$ {data.price} </Price>

      <CenterView>
        <Button onPress={ ( ) => edit(data) }>
          <ButtonText> Edit </ButtonText>
        </Button>

        <Button onPress={ ( ) => exclude(data)}>
          <ButtonText> Delete </ButtonText>
        </Button>

      </CenterView>
    </Container>
  );
}
