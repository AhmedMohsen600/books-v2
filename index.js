import { Book, Switch, Store, UI } from './modules/index.js';

import { DateTime } from './node_modules/luxon/src/luxon.js';

const time = document.querySelector('.time');

const updateTime = () => DateTime.now().toLocaleString(DateTime.DATETIME_MED);

time.textContent = updateTime();
setTimeout(updateTime, 60000);

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
