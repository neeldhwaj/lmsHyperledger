// export namespace org.imaginea.bookshelf.lms{
   export enum BookState {
      AVAILABLE,
      BORROWED,
      OVERDUE,
      LOST,
      REMOVED,
   }
   export enum MemberStatus {
      ACTIVE,
      INACTIVE,
   }
   export abstract class LibraryMember {
      email: string;
      name: string;
      status: MemberStatus;
      dateAdded: Date;
   }
   export class BookOwner extends LibraryMember {
   }
   export class BookBorrower extends LibraryMember {
   }
   export class Book {
      isbn: string;
      id: number;
      title: string;
      author: string;
      publisher: string;
      dateIssued: Date;
      dateAdded: Date;
      imageURL: string;
      description: string;
      genre: string;
      avgRating: number;
      totalRating: number;
      reviewersCount: number;
      bookOwner: BookOwner;
      bookBorrower: BookBorrower;
   }
   export class UpdateOwner {
      transactionID: string;
      newOwner: BookOwner;
      newBook: Book;
      timestamp: Date;
   }
   export class BorrowBook {
      transactionID: string;
      newBorrower: BookBorrower;
      book: Book;
      timestamp: Date;
   }
   export class ReturnBook {
      transactionID: string;
      bookOwner: BookOwner;
      book: Book;
      timestamp: Date;
   }
   export class GetParticipant {
      transactionID: string;
      email: string;
      timestamp: Date;
   }
   export class GetAsset {
      transactionID: string;
      isbn: string;
      timestamp: Date;
   }
// }
