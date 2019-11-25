import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildOneComponent } from './child-one/child-one.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChildOneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// The Idea of this project is that when we have 