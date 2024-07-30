//import { Component,computed,signal } from '@angular/core';
import { Component,Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    //using signal- object that stores a value (any type of value, including nested objects)
    //When a change occurs, Angular is then able to update that part of UI that needs updating
    //selectedUser= signal(DUMMY_USERS[randomIndex]);

    //Computed meant to be used with signals- Compute value
    //Angular recomputes image path if selectedUser signal value changes. Advantage of using signals.
    //imagePath= computed(()=>'assets/users/'+this.selectedUser().avatar)

    // onSelectUser(){
    //   const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    //   //this.selectedUser=DUMMY_USERS[randomIndex];
    //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // }

    //Input decorator- marking this property as settable from outside.
    //! indicates that it definitely will be set to a value though it is not seen by typescipt right now.
    @Input() avatar!: string;
    @Input() name!: string;

    get imagePath(){
      return 'assets/users/'+this.avatar;
   }

    onSelectUser(){}
}
