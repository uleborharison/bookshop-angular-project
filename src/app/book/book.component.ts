import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  // myInterval: any = setInterval(() => {
  //   console.log("Hello");

  // }, 1000);

  @Input() book: Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();
  isInCart: boolean = false

  constructor(private cartService: CartService) {
    console.log({ constructor: "constructors" });
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }


  // ngOnDestroy(): void {

  //   clearInterval(this.myInterval);
  //   console.log({ ngOnDestroy: "OnDestroy" });
  //   ;
  // }

  ngOnInit(): void {
  }



  AddToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
    //this.bookEmitter.emit(this.book)
    // console.log(this.book)
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }


}
