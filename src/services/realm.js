import Realm from 'realm';
import Book from '../Schemas/BookSchema'; // Certifique-se de que o caminho está correto

export default function getRealm() {
    return Realm.open({
        schema: [Book],
    });
}
