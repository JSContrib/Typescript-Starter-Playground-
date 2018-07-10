// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript - Book Store</h1>`;


/**
 * 
 */
class Book implements IBook {

  name: string;
  author: string;
  publisher: string;
  isbn: string;

/**
 * 
 */
  constructor(name: string, author: string, publisher: string, isbn: string) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.isbn = isbn;
  }
  /**
   * Show Alert
   */
  show = function () {
    alert("some message");
  };

/**
 * Display Content
 */
  getDisplayContent = function () {
    return this.name + "--" + this.author + "--" + this.publisher + "--" + this.isbn;
  }
}

/**
 * 
 */
declare interface IBook {
  name: string;
  author: string;
  publisher: string;
  isbn: string;

  show();

  getDisplayContent();
}

/**
 * 
 */
class BookStore {
  bookList: IBook[];
  constructor() {
    this.bookList = [];
    this.initList();

    //this.displayBooks();
  }

  /**
   * 
   */
  initList(): void {
    this.bookList.push(new Book("Book1", "Book Author1", "Book Publisher", "some-isbn"));
    this.bookList.push(new Book("Book2", "Book Author2", "Book Publisher", "some-isbn"));
    this.bookList.push(new Book("Book3", "Book Author3", "Book Publisher", "some-isbn"));
    this.bookList.push(new Book("Book4", "Book Author4", "Book Publisher4", "some-isbn4"));
  }

  /**
   * 
   */
  displayBooks(): void {

    var displayContent: string = '';
    for (var itemIndex = 0; itemIndex < this.bookList.length; itemIndex++) {
      let bookInfo: IBook = this.bookList[itemIndex];
      displayContent = displayContent + "<br/>" + bookInfo.getDisplayContent();
    }

    this.appendToDisplay(displayContent);
  }

  appendToDisplay(content: string): void
  {
    document.getElementById("books").innerHTML = document.getElementById("books").innerHTML +  "<hr>" + content;
  }
  
  /**
   * 
   * @param book 
   */
  addBook(book:IBook): boolean
  {
    let isSuccess:boolean = false;
    this.bookList.push(book);
    return isSuccess;
  }

  /**
   * 
   * @param book 
   */
  removeBook(book:IBook):boolean
  {
    let isSuccess:boolean = false;
    var index = this.bookList.indexOf(book, 0);
    if (index > -1) {
      this.bookList.splice(index, 1);
    }
    return isSuccess;
  }
  /**
   * 
   * @param book 
   */
  updateBook(book:IBook): boolean
  {
    let isSuccess:boolean = false;
    for(let itemIndex =0; itemIndex <this.bookList.length; itemIndex++ )
    {
      if(this.bookList[itemIndex].name == book.name)
          this.bookList[itemIndex] = book;
    }
    return isSuccess;
  }

}


let myBookStore = new BookStore(); 
myBookStore.appendToDisplay("<h3>Welcome to BookStore</h3>");
myBookStore.displayBooks();

myBookStore.appendToDisplay("<h3>Adding New Book</h3>");
var newBook = new Book("Book5", "Book Author5", "Book Publisher", "some-isbn");
myBookStore.addBook(newBook);
myBookStore.displayBooks();

myBookStore.appendToDisplay("<h3>Removing Book</h3>");
myBookStore.removeBook(newBook);
myBookStore.displayBooks();

myBookStore.appendToDisplay("<h3>Updating a Book</h3>");
myBookStore.addBook(newBook);
newBook.author = "New Author";
myBookStore.updateBook(newBook);
myBookStore.displayBooks();
