import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';


@Component({
  selector: 'user',
  template: `
  <h1>{{name}}</h1>
    <p><strong>Email: </strong> {{email}}</p>
    <p><strong>{{address.street}}, {{address.city}}, {{address.state}}</strong></p>
    <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
    
    <div *ngIf="showHobbies">
      <h3>Hobbies</h3>
      <ul>
        <li *ngFor = "let hobby of hobbies; let i = index">
          {{hobby}}<button (click) = "deleteHobby(i)">X</button>
        </li>
      </ul>
        <form (submit)="addHobby(hobby.value)">
          <label>Add Hobby: </label><br />
          <input type="text" #hobby /><br />
        </form>
    </div>
    <hr />
    
    <h3>Edit User</h3>
    <form>
      <label>Name: </label><br/>
      <input type="text" name = "name" [(ngModel)] = "name" /><br />
       <label>Email </label><br/>
      <input type="text" name = "email" [(ngModel)] = "email" /><br />
       <label>street </label><br/>
      <input type="text" name = "address.street" [(ngModel)] = "address.street" /><br />
      <label>city </label><br/>
      <input type="text" name = "address.city" [(ngModel)] = "address.city" /><br />
      <label>state </label><br/>
      <input type="text" name = "address.state" [(ngModel)] = "address.state" /><br />
    </form>
`,
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'John Doe';
    this.email = 'john@gmail.com';
    this.address = {
      street: '12 Main Street',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ["Music", "Movies", "Sports"]
    this.showHobbies = false;
  }

  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    }
    else {
      this.showHobbies = true;
    }
  }
  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }
}

interface address {
      street: string;
      city: string;
      state: string;
}
