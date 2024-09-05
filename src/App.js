import React, { useEffect, useState } from 'react';
import { Container, Logo, Title, Input, CenterView, ButtonText, Button, List } from './styles';
import Books from './Books';
import { Alert } from 'react-native';

export default function App () {
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ books, setBooks ] = useState([]);

    function addBook () {
        Alert.alert('Clicou');
    }


    return(
      <Container>
        <Logo> Upcoming books </Logo>

        <Title> Name </Title>
        <Input
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={ ( text ) => setName( text ) }
        value={ name }
        />

        <Title> Price </Title>
        <Input
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={ ( text ) => setPrice( text ) }
        value={ price }
        />

        <CenterView>
            <Button onPress={ () => addBook() }>
                <ButtonText> Register </ButtonText>
            </Button>

            <Button onPress={ ( ) => {} }>
                <ButtonText> Edit </ButtonText>
            </Button>
        </CenterView>

        <List
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={books}
        keyExtractor={ item => String(item.id)}
        renderItem={ ({ item }) => ( <Books data={ item } /> ) }
        />


      </Container>
    );
}
