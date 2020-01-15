import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-nav',
  templateUrl: './front-nav.component.html',
  styleUrls: ['./front-nav.component.scss']
})
export class FrontNavComponent implements OnInit {
picture;
UserName;
connected;
  constructor(private userService:UserService, private router: Router) {
    this.UserName= localStorage.getItem('UserName');
    this.picture= localStorage.getItem('Picture');

    if(localStorage['iduser']!=null) {
      this.connected= true;
    }else{
      this.connected=false;
    }

   }


  ngOnInit() {


  }

  logout()
  {
    localStorage.removeItem('iduser');
    localStorage.removeItem('Token');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('UserName');
    localStorage.removeItem('Role');
    localStorage.removeItem('Picture');



    this.userService.logout().subscribe(
      (data) =>
      {
        console.log(data['statusrslt'])
         this.router.navigate(["login"]);
      }
    )
  }

}
