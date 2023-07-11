let myLibrary = [];
const newBookBtn = document.querySelector('#new-book-btn');
let form = document.querySelector('#form');
const addBook = document.querySelector('#add-book-btn')
newBookBtn.addEventListener('click', function () {
  form.style.display = 'flex';
})

book.prototype.toggleRead = function () {
  this.read = !this.read;
}
function toggleRead(index) {
  myLibrary[index].toggleRead();
  render()
}


function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return `${this.title}, by ${this.author}, ${this.pages}pages, ${this.status}`
  // }
}
function render() {
  let libraryBook = document.querySelector('#library');
  libraryBook.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEL = document.createElement('div');
    bookEL.innerHTML =
      `
        <div class = 'card'>
        <h3 class = 'card-title'>${book.title}</h3>
        <h3 class = 'card-author'>${book.author}</h3>
        <h3 class = 'card-pages'>${book.pages}</h3>
        <h3 class = 'card-read'>${book.read ? 'Read' : 'Not Read Yet'}</h3>
        <button class = 'card-remove' onclick = 'removeBook(${i})'>Remove</button>
        <button class = 'card-toggle-read' onclick = 'toggleRead(${i})'>toggle Read</button>
     </div>`;
    libraryBook.appendChild(bookEL);
  }
}
function removeBook(index) {
  myLibrary.splice(index, 1)
  render()
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#status').checked;
  let newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
  render()
}

form.addEventListener('submit', function (event) {
  event.preventDefault()
  addBookToLibrary()
})




