import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact }          from './contact';

@Injectable()
export class ContactService {

    private contactsUrl = "app/contacts";
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {}

        getContacts(): Promise<Contact[]> {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(response => response.json().data as Contact[])
            .catch(this.handleError);
        }

        private handleError(error: any): Promise<any> {
            console.error('An error occurred', error);
            return Promise.reject(error.message || error);
        }
}