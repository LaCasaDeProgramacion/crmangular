import { UserService } from './../../../services/user.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ComplaintsService } from 'src/app/services/complaintsManagement/complaints.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  UserName=localStorage.getItem('UserName');
picture= localStorage.getItem('Picture');

  notiflist=[];
  constructor(location: Location,  private element: ElementRef, private router: Router,private userService:UserService,private complaintS:ComplaintsService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  /*  this.complaintS.getNotif().subscribe(
      (data)=>
      {
        this.notiflist =data;
      }
    )*/
  }
  load()
  {
    this.complaintS.getNotif().subscribe(
      (data)=>
      {
        this.notiflist =data;
      }
    )
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
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
  Details(id)
  {
    this.complaintS.MarknotifAsread(id).subscribe(
      data =>
      {
        this.load();
        console.log(data);
      }
    )
  }
  MarkAllAsread()
  {
    this.complaintS.MarkAllAsRead().subscribe(
      (data)=>
      {
        this.load();
        console.log(data)



      }
    )
  }

}
