import { UserService } from './../../../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/entities/user';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  usernameResText;
  constructor(private userService:UserService,
    private fb:FormBuilder,
    private router:Router,
    private modalService: NgbModal) {}
  closeResult: string;
  public user:User={username:'',password:''};
  public userData : User={role:''};

  disablebol = true ;
  ngOnInit() {
  }
  ngOnDestroy() {
  }
  /*form= new FormGroup(
    {
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    }
  )*/
  onSubmit(){

    console.log(this.user.username +" " + this.user.password + " ")
    this.userService.login(this.user.username, this.user.password).subscribe(
      data=> {
          if(!data['statusrslt']){
         localStorage.setItem('iduser',data['id']);
         localStorage.setItem('Token',data['token']);
         localStorage.setItem('loggedIn','true');
         localStorage.setItem('UserName',data['username']);
        if (data['role']== 'ADMIN' || data['role']== 'VENDOR' )
       this.router.navigate(["dashboard"]);
        else
        this.router.navigate(["home"]);
          }else {
             console.log(data['statusrslt'])//msg mdp username wrong !!
          }
      }
    );
  }

  open1(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

}
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ResetPass()
  {
    this.userService.resetPass(this.usernameResText).subscribe(
      data => {
        if (data['statusrslt']==='Reseting Password')
        {
          this.modalService.dismissAll();

        }

        else console.log("erreuur")
      }
    );


  }
  onSubmitPass()
  {

  }

}
