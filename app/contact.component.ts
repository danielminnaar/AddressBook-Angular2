import { Component }    from '@angular/core';
import { Contact }      from './contact';

@Component({
    moduleId: module.id,
    selector: 'addressbook-contact',
    templateUrl: 'addressbook-contact.html',
})

export class ContactComponent {
    contact: Contact;

}