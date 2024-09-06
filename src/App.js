import { useEffect, useState } from 'react';
import { Container, Logo, Title, Input, CenterView, ButtonText, Button, List } from './styles';
import { Alert, Keyboard } from 'react-native';

import getRealm from './services/realm';
import Books from './Books';
import React from 'react';
import { exists } from 'realm';


export default function App () {
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ idEdit, setIdEdit ] = useState(null);
    const [ books, setBooks ] = useState([]);
    const [ disableBtn, setDisableBtn ] = useState(false);

    useEffect(() => {
        async function loadBooks () {
            const realm = await getRealm();
            const data = realm.objects('Book');
            setBooks(data);
        }

        loadBooks();
    }, []);


    async function saveBook ( data ) {
        const realm = await getRealm();
        const id = realm.objects('Book').sorted('id', true).length > 0
        ? realm.objects('Book').sorted('id', true)[0].id + 1 : 1;

        const bookData = {
            id: id,
            name: data.name,
            price: data.price,
        };

        realm.write(() => {
            realm.create('Book', bookData);
        });

    }

    async function addBook () {
        if( name === '' || price === '') {
            Alert.alert(' Fill in all fields ');
            return;
        }

        try {
            const data = {
                name: name,
                price: price,
            };

            await saveBook(data);

            setName('');
            setPrice('');
            Keyboard.dismiss();
        } catch (error) {
            Alert.alert('Error', error.message);
        }

    }

    function editField( data ) {
        setName(data.name);
        setPrice(data.price);
        setIdEdit(data.id);
        setDisableBtn(true);
    }

    async function editBook() {
        if(idEdit === null) {
            Alert.alert("You can't edit.");
            return;
        }

        const realm = await getRealm();
        const response = {
            id: idEdit,
            name: name,
            price: price,
        };

        await realm.write(() => {
            realm.create('Book', response, 'modified');
        });

        const alterData = await realm.objects('Book').sorted('id', false);
        setBooks(alterData);
        setName('');
        setPrice('');
        setIdEdit(null);
        setDisableBtn(false);
        Keyboard.dismiss();

    }

    async function deleteBook ( data ) {
        const realm = await getRealm();
        const ID = data.id;

        realm.write(() => {
            if(realm.objects('Book').filtered(`id = ${ID}`).length > 0) {
                realm.delete(
                    realm.objects('Book').filtered(`id = ${ID}`)
                );
            }
        });

        const currentBooks = realm.objects('Book').sorted('id', false);
        setBooks(currentBooks);
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
                <Button
                onPress={ () => addBook() } 
                disabled={disableBtn}
                style={{opacity: disableBtn ? 0.1 : 1}}
                >
                    <ButtonText> Register </ButtonText>
                </Button>

                <Button onPress={ () => editBook() }>
                    <ButtonText> Edit </ButtonText>
                </Button>
            </CenterView>

            <List
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            data={books}
            keyExtractor={ item => String(item.id)}
            renderItem={ ({ item }) => ( <Books data={item} edit={editField} exclude={deleteBook}/>)}
            />
        </Container>
    );
}
