import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks() {
    return [
      {
        name: "Clean JavaScript",
        author: "Miguel A. Gomez",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PeXBBnvau506xfCMz8m4tacwJd4KK9jY0A&usqp=CAU",
        amount: 500,
      },

      {
        name: "Programming On Purpose",
        author: "P. J.Plauger",
        src: "https://images-na.ssl-images-amazon.com/images/I/51j0xO6ZtVL._AC_SY400_.jpg",
        amount: 400,
      },
      {
        name: "Programming Kotlin Application",
        author: "Brett McLaughlin",
        src: "https://theportobellobookshop.com/wp-content/uploads/2021/02/9781119696186.jpg",
        amount: 500,
      },

      {
        name: "Front-End Developer",
        author: "O'Reilly",
        src: "https://learning.oreilly.com/library/cover/9781780174785/250w/",
        amount: 400,
      },
    ];
  };
}
