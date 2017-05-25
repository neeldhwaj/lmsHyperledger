import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BookService } from './Book.service';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-Book',
  templateUrl: './Book.component.html',
  styleUrls: ['./Book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;


  isbn = new FormControl("", Validators.required);

  id = new FormControl("", Validators.required);

  title = new FormControl("", Validators.required);

  author = new FormControl("", Validators.required);

  publisher = new FormControl("", Validators.required);

  dateIssued = new FormControl("", Validators.required);

  dateAdded = new FormControl("", Validators.required);

  imageURL = new FormControl("", Validators.required);

  description = new FormControl("", Validators.required);

  genre = new FormControl("", Validators.required);

  avgRating = new FormControl("", Validators.required);

  totalRating = new FormControl("", Validators.required);

  reviewersCount = new FormControl("", Validators.required);

  bookOwner = new FormControl("", Validators.required);

  bookBorrower = new FormControl("", Validators.required);



  constructor(private serviceBook: BookService, fb: FormBuilder) {
    this.myForm = fb.group({


      isbn: this.isbn,



      id: this.id,



      title: this.title,



      author: this.author,



      publisher: this.publisher,



      dateIssued: this.dateIssued,



      dateAdded: this.dateAdded,



      imageURL: this.imageURL,



      description: this.description,



      genre: this.genre,



      avgRating: this.avgRating,



      totalRating: this.totalRating,



      reviewersCount: this.reviewersCount,



      bookOwner: this.bookOwner,



      bookBorrower: this.bookBorrower


    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceBook.getAll()
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        result.forEach(asset => {
          tempList.push(asset);
        });
        this.allAssets = tempList;
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "org.imaginea.bookshelf.lms.Book",


      "isbn": this.isbn.value,



      "id": this.id.value,



      "title": this.title.value,



      "author": this.author.value,



      "publisher": this.publisher.value,



      "dateIssued": this.dateIssued.value,



      "dateAdded": this.dateAdded.value,



      "imageURL": this.imageURL.value,



      "description": this.description.value,



      "genre": this.genre.value,



      "avgRating": this.avgRating.value,



      "totalRating": this.totalRating.value,



      "reviewersCount": this.reviewersCount.value,



      "bookOwner": this.bookOwner.value,



      "bookBorrower": this.bookBorrower.value


    };

    this.myForm.setValue({


      "isbn": null,



      "id": null,



      "title": null,



      "author": null,



      "publisher": null,



      "dateIssued": null,



      "dateAdded": null,



      "imageURL": null,



      "description": null,



      "genre": null,



      "avgRating": null,



      "totalRating": null,



      "reviewersCount": null,



      "bookOwner": null,



      "bookBorrower": null


    });

    return this.serviceBook.addAsset(this.asset)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this.myForm.setValue({


          "isbn": null,



          "id": null,



          "title": null,



          "author": null,



          "publisher": null,



          "dateIssued": null,



          "dateAdded": null,



          "imageURL": null,



          "description": null,



          "genre": null,



          "avgRating": null,



          "totalRating": null,



          "reviewersCount": null,



          "bookOwner": null,



          "bookBorrower": null


        });
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else {
          this.errorMessage = error;
        }
      });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.imaginea.bookshelf.lms.Book",







      "id": this.id.value,





      "title": this.title.value,





      "author": this.author.value,





      "publisher": this.publisher.value,





      "dateIssued": this.dateIssued.value,





      "dateAdded": this.dateAdded.value,





      "imageURL": this.imageURL.value,





      "description": this.description.value,





      "genre": this.genre.value,





      "avgRating": this.avgRating.value,





      "totalRating": this.totalRating.value,





      "reviewersCount": this.reviewersCount.value,





      "bookOwner": this.bookOwner.value,





      "bookBorrower": this.bookBorrower.value



    };

    return this.serviceBook.updateAsset(form.get("isbn").value, this.asset)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }


  deleteAsset(): Promise<any> {

    return this.serviceBook.deleteAsset(this.currentId)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceBook.getAsset(id)
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        let formObject = {


          "isbn": null,



          "id": null,



          "title": null,



          "author": null,



          "publisher": null,



          "dateIssued": null,



          "dateAdded": null,



          "imageURL": null,



          "description": null,



          "genre": null,



          "avgRating": null,



          "totalRating": null,



          "reviewersCount": null,



          "bookOwner": null,



          "bookBorrower": null


        };




        if (result.isbn) {
          formObject.isbn = result.isbn;
        } else {
          formObject.isbn = null;
        }

        if (result.id) {
          formObject.id = result.id;
        } else {
          formObject.id = null;
        }

        if (result.title) {
          formObject.title = result.title;
        } else {
          formObject.title = null;
        }

        if (result.author) {
          formObject.author = result.author;
        } else {
          formObject.author = null;
        }

        if (result.publisher) {
          formObject.publisher = result.publisher;
        } else {
          formObject.publisher = null;
        }

        if (result.dateIssued) {
          formObject.dateIssued = result.dateIssued;
        } else {
          formObject.dateIssued = null;
        }

        if (result.dateAdded) {
          formObject.dateAdded = result.dateAdded;
        } else {
          formObject.dateAdded = null;
        }

        if (result.imageURL) {
          formObject.imageURL = result.imageURL;
        } else {
          formObject.imageURL = null;
        }

        if (result.description) {
          formObject.description = result.description;
        } else {
          formObject.description = null;
        }

        if (result.genre) {
          formObject.genre = result.genre;
        } else {
          formObject.genre = null;
        }

        if (result.avgRating) {
          formObject.avgRating = result.avgRating;
        } else {
          formObject.avgRating = null;
        }

        if (result.totalRating) {
          formObject.totalRating = result.totalRating;
        } else {
          formObject.totalRating = null;
        }

        if (result.reviewersCount) {
          formObject.reviewersCount = result.reviewersCount;
        } else {
          formObject.reviewersCount = null;
        }

        if (result.bookOwner) {
          formObject.bookOwner = result.bookOwner;
        } else {
          formObject.bookOwner = null;
        }

        if (result.bookBorrower) {
          formObject.bookBorrower = result.bookBorrower;
        } else {
          formObject.bookBorrower = null;
        }


        this.myForm.setValue(formObject);

      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });

  }

  resetForm(): void {
    this.myForm.setValue({


      "isbn": null,



      "id": null,



      "title": null,



      "author": null,



      "publisher": null,



      "dateIssued": null,



      "dateAdded": null,



      "imageURL": null,



      "description": null,



      "genre": null,



      "avgRating": null,



      "totalRating": null,



      "reviewersCount": null,



      "bookOwner": null,



      "bookBorrower": null


    });
  }

}
