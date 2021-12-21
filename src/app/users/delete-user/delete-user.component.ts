import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  curId:any;
  constructor(private userserc:UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(activid=>{
      this.curId = activid.id;
       });

       this.userserc.deletesingleUSers(this.curId).subscribe(dletedata=>{
         alert("selected data deleted successfully");
       },err=>{
        console.log("somting went wrong",err);
      });
  }

}
