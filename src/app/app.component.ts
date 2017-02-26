import { Component } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms'
import{User} from './user.interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user :FormGroup;
constructor() {}
ngOnInit(){
this.user=new FormGroup({
name: new FormControl('',[Validators.required, Validators.minLength(2)]),
account: new FormGroup({
  email: new FormControl('', Validators.required),
  confirm: new FormControl('', Validators.required)
})
})

}
onSubmit({value, valid} : {value:User, valid: boolean}){
  console.log(value, valid);
}

}
