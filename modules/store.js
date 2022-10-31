import UI from './ui.js';

class Store {
  static getBooks = () => {
    let books;
    if (!localStorage.getItem('books')) books = [];
    else books = JSON.parse(localStorage.getItem('books'));
    return books;
  };

  static addBook = (book) => {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    UI.displayBooks(books);
  };

  static removeBook = (id) => {
    let books = Store.getBooks();
    books = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(books));
    UI.displayBooks(books);
  };
}

export default Store;
