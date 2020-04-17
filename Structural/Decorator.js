class Book {
  constructor(title, author, price) {
    this._title = title;
    this._author = author;
    this.price = price;
  }

  getDetails() {
    return `${this._title} by ${this._author}`;
  }
}

// decorator 1
function giftWrap(book) {
  book.isGiftWrapped = true; //添加新的属性
  book.unwrap = function() {
    return `Unwrapped ${book.getDetails()}`;
  };
  delete book._author; //删除实例属性

  return book;
}

// decorator 2
function hardbindBook(book) {
  book.isHardbound = true;
  book.price += 5;
  return book;
}

module.exports = {
  Book,
  giftWrap,
  hardbindBook
};
