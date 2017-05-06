import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { ContactsListComponent }    from './contacts-list.component';
import { ContactService }       from './contact.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
    ContactsListComponent, 
    ],
  providers: [
    ContactService,
  ],
  bootstrap:    [ 
    ContactsListComponent
     ]
})
export class AppModule { }
