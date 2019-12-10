import { Topic } from './../../../entities/Topics';
import { Forum } from 'src/app/entities/Forum';
import { ForumService } from './../../../services/prospectingManagement/forum.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  forum1 : Forum;
  forum2 ;
  forum3;
  forums;
  all;
  nbForums = 3;
  nb = 0;
  topic   ;
  connected ;

  closeResult: string;
  closeResult1: string;
  constructor(private forumService:ForumService, private modalService: NgbModal, private router: Router) {
        this.LoadForums();
        console.log("USER"+ localStorage['Role'])
        if (localStorage['iduser']==null)
        {
          this.connected=false;
        }
        else this.connected=true ;
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
  openarchive(content) {
       this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }

   loadF()
   {
     this.forumService.getForums().subscribe(data => {
       this.all= data ;
     })
   }

  LoadForums ()
  {
    this.forumService.popularForums().subscribe(data=>
      {
        this.forums=data;
        this.forums.forEach(element => {
        console.log(this.nb)
          if (this.nb==0)
          {
            this.forum1 = element;
          }
          if (this.nb==1)
          {
            this.forum2 = element;
          }
          if (this.nb ==2)
          {
            this.forum3 = element;
          }
          this.nb++;
        });
        console.log(this.forum1)
        console.log(this.forum2)
        console.log(this.forum3)
      });
      /*this.forum1=this.forums[0];
      this.forum2=this.forums[1];
      this.forum2=this.forums[2];*/

  }

  onSubmit(){

  }
  ngOnInit() {
    this.LoadForums();
  }
  add(id, title , content)
  {
      console.log("id"+ id+ " title "+ title )
      this.forumService.addTopic(id, title).subscribe(data=>
        {
          console.log(data )
        });
        this.modalService.dismissAll();
        this.openarchive(content);
  }
  sendEmail(object, message , content)
  {
    this.openarchive(content);
    this.forumService.sendMail(object, message).subscribe(data=>
      {
        console.log(data )
      });


  }
}
