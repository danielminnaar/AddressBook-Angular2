import { Component, OnInit }    from '@angular/core';
import { Contact }              from './contact';
import { ContactService }       from "./contact.service";

@Component({
    moduleId: module.id,
    selector: 'contacts-list',
    templateUrl: 'contacts-list.component.html'
})

export class ContactsListComponent implements OnInit {
    contacts: Contact[];
    constructor(private contactService: ContactService) {} 
    public tags = ['Car', 'Bus', 'Train'];
    ngOnInit(): void {
        this.getContacts();
    }

    getContacts(): void {
        this.contactService.getContacts().then(contacts => this.contacts = contacts);
    }
}