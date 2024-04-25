class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
}

let books = [];

function addBook(title, author, year, genre) {
    if (!validateYear(year) || !validateGenre(genre)) {
        alert('Неверные входные данные. Год должен быть числом, а жанр должен содержать только буквы англиской раскладки.');
        return;
    }
    let book = new Book(title, author, year, genre);
    books.push(book);
    updateBooksList();
}

function deleteBook(index) {
    books.splice(index, 1);
    updateBooksList();
}

function updateBook(index, title, author, year, genre) {
    if (!validateYear(year) || !validateGenre(genre)) {
        alert('Неверные входные данные. Год должен быть числом, а жанр должен содержать только буквы англиской раскладки.');
        return;
    }
    books[index].title = title;
    books[index].author = author;
    books[index].year = year;
    books[index].genre = genre;
    updateBooksList();
}

function updateBooksList() {
    let list = document.getElementById('booksList');
    list.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        
        let li = document.createElement('li');
        li.innerHTML = `${book.title} by ${book.author} (${book.year}, ${book.genre})`;
        list.appendChild(li);
    }
}

function validateYear(year) {

    return /^\d{4}$/.test(year);
}


function validateGenre(genre) {
    return /^[a-zA-Z]+$/.test(genre);
}