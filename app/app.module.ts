import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {routing} from './app.routes';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],

    declarations: [AppComponent, 
    ],
    
    providers:[],
    
    bootstrap: [AppComponent]   
})
export class AppModule{}
