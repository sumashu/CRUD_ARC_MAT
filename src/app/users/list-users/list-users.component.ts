import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
   listAll:any;
  constructor(private _userserv:UserService) { }

  ngOnInit(): void {

    this._userserv.listUSers().subscribe(result => {
        this.listAll = result;
        
    })
  }

}
