import { Component } from '@angular/core';
import { User, Address } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  user: User;

  constructor(){
    this.user = new User({ firstName: 'Konda', 
      address: new Address({ city: 'Waukegan', state: 'IL' })
    });
  }

  changePropName(){
    this.user = { ...this.user, firstName: 'Changed'};
  }

  changeNestedObjPropName(){
     this.user = { ...this.user, address: { ...this.user.address, state: 'WI'}};
  }

    changeNestedObj(){
     this.user = { ...this.user, address: { city: 'Kenosha', state: 'WI'}};
  }
}

