import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-nav',
  templateUrl: './front-nav.component.html',
  styleUrls: ['./front-nav.component.scss']
})
export class FrontNavComponent implements OnInit {
loginistrue:boolean;
picture:string;
  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
   if (localStorage.getItem("loggedIn")){
    this.loginistrue = true;
   }else {
    this.loginistrue = false;
   }
   this.picture =localStorage.getItem('Picture')
  }
  logout()
  {
    localStorage.removeItem('iduser');
    localStorage.removeItem('Token');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('UserName');
    localStorage.removeItem('Role');
    this.userService.logout().subscribe(
      (data) =>
      {
        console.log(data['statusrslt'])
         this.router.navigate(["login"]);
      }
    )
  }

}
