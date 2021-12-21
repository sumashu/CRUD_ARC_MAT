import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  profileFormEdit: FormGroup = new FormGroup({});
  userId: any;
  userdata: any;
  dataloaded: boolean = false;
  constructor(private userServe: UserService, private activeroute: ActivatedRoute, private formbuild: FormBuilder) {
}


  ngOnInit(): void {
    this.dataloaded = false;
    this.activeroute.params.subscribe(routeid => {
      this.userId = routeid.id;
    });
    if (this.userId !== '') {
      this.userServe.viewsingleUser(this.userId).toPromise().then(userData => {
        this.userdata = userData;
        Object.assign(this.userdata, userData);
        console.log(this.userdata);

        this.profileFormEdit = this.formbuild.group({
          'name': new FormControl(this.userdata.name, Validators.required),
          'email': new FormControl(this.userdata.email),
          'mobile': new FormControl(this.userdata.mobile),
          'address': new FormControl(this.userdata.address)
        })
        this.dataloaded = true;
      }).catch(err=>{
       console.log("something went wrong",err);
      });
      
    }

  }
  get name() { return this.profileFormEdit.get('name'); }
  get email() { return this.profileFormEdit.get('email'); }
  get mobile() { return this.profileFormEdit.get('mobile'); }
  get address() { return this.profileFormEdit.get('address'); }
  


  onSave() {
    console.log(this.profileFormEdit.value);
    this.userServe.editSingleUser(this.userId,this.profileFormEdit.value).subscribe(result => {
      console.log("data updated suucessfully",result)
    })
  }

}
