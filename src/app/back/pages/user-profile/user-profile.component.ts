import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService:UserService) { }
  NewPassword;
  public user:User={cin:null,username:'', email:'', password:'', firstName:'', lastName:'', role:'', dateBirth:'' };
  public userUpd:User={cin:null,username:'', email:'', password:'', firstName:'', lastName:'', role:'', dateBirth:'' };
  ngOnInit() {
    this.loadUser();
  }
  onSubmit(){

    //this.user.id = localStorage.getItem['iduser'];
    this.userService.updateCompte(this.user).subscribe(data=> console.log(data["statusrslt"]))
    this.loadUser();
    }
    onSubmitPass(){
      console.log(this.user.username +"   "+ this.NewPassword)
      this.userService.UpdatePass(this.user.username, this.NewPassword).subscribe(data=> console.log(data));
    }

    loadUser()
    {
      this.userService.profile().subscribe(data=> {
        this.user.id=data['id'];
        this.user.cin=data['cin'];
        this.user.username=data['username'];
        this.user.email=data['email'];
        this.user.password=data['password'];
        this.user.firstName=data['firstName'];
        this.user.lastName=data['lastName'];
        this.user.role=data['role'];
        this.user.dateBirth=data['dateBirth'];
        this.user.picture = data['picture'];
      });
    }
}
