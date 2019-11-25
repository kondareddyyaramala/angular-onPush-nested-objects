export class User {
   firstName: string;
   address: Address;

   constructor(config){
     config = config || {};
     this.firstName = config.firstName;
     this.address = config.address;
   }
}


export class Address {
  city: string;
  state: string;

   constructor(config){
     config = config || {};
     this.city = config.city;
     this.state = config.state;
   }
}