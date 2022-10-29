import { Book, Switch, Store, UI } from './modules/index.js';
// events
document.addEventListener('DOMContentLoaded', () => {
  const books = Store.getBooks();
  UI.displayBooks(books);
});

document.querySelector('#form-book').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author, UI.generateId());
  Store.addBook(book);
  UI.cleanInputs();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  const { id } = e.target.parentElement.parentElement;
  Store.removeBook(id);
});

document.querySelectorAll('.change').forEach((li) => {
  li.addEventListener('click', () => {
    Switch.changeContent(li.textContent);
  });
});
