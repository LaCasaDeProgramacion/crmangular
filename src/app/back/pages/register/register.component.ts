import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  disablebol:boolean=true;
  testbol:boolean=false ;
  closeResult: string;
  constructor( private userService: UserService,
    private modalService: NgbModal,
    private router:Router) { }


   user:User={cin:0,username:'', email:'', password:'', firstName:'', lastName:'', role:'', dateBirth:'' };
   usercode;

  ngOnInit() {
    this.testbol=false;
  }

  onSubmit()
  {
    this.userService.Register(this.user).subscribe(data => {
      data=> console.log(data['statusrslt'])
      if(data['statusrslt']=='added')
           this.testbol=true;
           console.log("************",this.testbol)   });


  }

  open1(content) {
    console.log("++++++++++++++",this.testbol)

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

  codeconfirmemail()
  {
    this.userService.confirm(this.usercode, this.user.username).subscribe(
      data => {
        if (data['statusrslt']=='ACCEPTED')
        {
          this.modalService.dismissAll();
          this.router.navigate(["login"]);
        }

        else console.log("erreuur")
      }
    );
  }
}
