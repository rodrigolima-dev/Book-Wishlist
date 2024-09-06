import Realm from 'realm';

// Definindo a classe Book que estende Realm.Object
class Book extends Realm.Object {}
Book.schema = {
  name: 'Book',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    name: 'string',
    price: 'string',
  },
};

export default Book;
