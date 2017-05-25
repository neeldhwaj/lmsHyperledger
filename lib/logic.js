'use strict';

/**
  * @param  {org.imaginea.bookshelf.lms.UpdateOwner} book - transaction
  * @transaction
  */

function UpdateOwner(book) {
  console.log("Inside Update book transaction");
  book.newBook.bookOwner = book.newOwner;
  return getAssetRegistry('org.imaginea.bookshelf.lms.Book')
    .then(function (assetRegistry) {
      return assetRegistry.update(book.newBook);
    });
}

/**
  * @param  {org.imaginea.bookshelf.lms.BorrowBook} book - transaction
  * @transaction
  */

function BorrowBook(book) {
  console.log("Inside Borrow book transaction");
  book.book.bookBorrower = book.newBorrower;
  return getAssetRegistry('org.imaginea.bookshelf.lms.Book')
    .then(function (assetRegistry) {
      return assetRegistry.update(book.book);
    });
}

/**
  * @param  {org.imaginea.bookshelf.lms.ReturnBook} book - transaction
  * @transaction
  */

function ReturnBook(book) {
  console.log("Inside Return book transaction");
  book.book.bookOwner = book.bookOwner;
  book.book.bookBorrower = null;
  return getAssetRegistry('org.imaginea.bookshelf.lms.Book')
    .then(function (assetRegistry) {
      return assetRegistry.update(book.book);
    });
}