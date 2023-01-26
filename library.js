window.onload = (showLibrary)

document.getElementById("add-btn").onclick = (addBookToLibrary)

class Book {
    constructor (title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    
        this.info = function() {
            return title + ' by ' + author + ', ' + pages + ' pages. ' + read
        }
    }
}

let book = new Book('The Hobbit', 'JRR Tolkien', 200, false)
let book2 = new Book('The Two Towers', 'JRR Tolkien', 200, false)
let book3 = new Book('The Return of the King', 'JRR Tolkien', 200, false)

const myLibrary = [book, book2, book3]

function addBookToLibrary(event) {
    event.preventDefault();
    let title = prompt('Title:')
    let author = prompt('Author:')
    let pages = prompt('Pages:')
    let read = prompt('Read:')
    myLibrary.push(book = new Book(title, author, pages, read))
    showLibrary()
}

function showLibrary() {
    console.log(myLibrary)
    document.getElementById("library-table-body").innerHTML = myLibrary.map(book => `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read}</td>

            <td><button id="${book.title}">Delete</td>
        </tr>    
        `).join(`\n`)
        myLibrary.map(book =>
            document.getElementById(book.title).onclick = deleteBook
        )
}

function deleteBook(event) {
    document.getElementById(event.target.id)

    var title = event.target.id
    console.log(title)

    const result = myLibrary.find(book => book.title == title)

    myLibrary.splice(myLibrary.indexOf(result), 1)
    showLibrary()
}