import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  curId:any;
  userData:any;
  constructor(private userserc:UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(activid=>{
        this.curId = activid.id;
        
    });

    this.userserc.viewsingleUser(this.curId).subscribe(result=>{
         this.userData = result;
         
    },err=>{
      console.log("somting went wrong",err);
    })
  }

}
