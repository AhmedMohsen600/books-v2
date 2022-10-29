class UI {
  static displayBooks = (books) => {
    const list = document.querySelector('#book-list');
    if (!books.length) list.innerHTML = '';
    let content = '';
    books.forEach((book) => {
      content += `<tr id=${book.id}>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
          </tr>`;
      list.innerHTML = content;
    });
    content = '';
  };

  static generateId = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  static cleanInputs = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  };
}

export default UI;
