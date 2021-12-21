import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  profileForm:any;
  constructor(private userServ:UserService) {
   
    this.profileForm = new FormGroup({
       name:new FormControl('',Validators.required),
       email:new FormControl(''),
       mobile:new FormControl(''),
       address:new FormControl('')


    })
   }

  ngOnInit(): void {
  }

  get name() { return this.profileForm.get('name'); }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

    this.userServ.addsingleUser(this.profileForm.value).subscribe(userData => {
          console.log(userData);
          alert('new user successfully added')
    },err => {
      alert(err);
    })
  }

}
