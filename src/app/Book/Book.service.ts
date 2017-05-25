import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../org.imaginea.bookshelf.lms';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class BookService {

	
		private NAMESPACE: string = 'org.imaginea.bookshelf.lms.Book';
	



    constructor(private dataService: DataService<Book>) {
    };

    public getAll(): Observable<Book[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Book> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Book> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Book> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Book> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
