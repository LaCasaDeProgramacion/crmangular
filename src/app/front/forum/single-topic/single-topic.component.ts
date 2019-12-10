import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { Topic } from './../../../entities/Topics';
import { ForumService } from './../../../services/prospectingManagement/forum.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.scss']
})
export class SingleTopicComponent implements OnInit {

  id ;
  topic: Topic ;
  nb ;
  message ;
  idUser ;
  closeResult: string;
  closeResult1: string;
  connected;
  constructor(private route: ActivatedRoute, private service : ForumService,
    private router: Router , private modalService: NgbModal) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.loadTopic();
      this.idUser = localStorage['iduser'];
      this.updateNbSeen();
    });
      this.loadNb();
      if (localStorage['iduser']==null)
      {
        this.connected=false;
      }
      else this.connected=true ;
   }

   loadTopic()
   {
     this.service.getTopicById(this.id).subscribe(data=>
      {
        this.topic=data;
        console.log(this.topic)
      })
   }
   loadNb()
   {
     this.service.getNbPosts(this.id).subscribe(data => {
       this.nb =data ;
     })
   }

   addResponse (post)
   {
     console.log("ID USER " + localStorage.getItem('id') );
     localStorage['iduser'];
     let id = localStorage['iduser'];
     this.service.addPost(id, this.id, post).subscribe(data=>{console.log(data);
     this.loadTopic();
     this.loadNb();

    });
   }
  ngOnInit() {
  }
  deletePost(id )
  {
    console.log("post to delete "+id)
      this.service.deletePost(id).subscribe(data=>{console.log(data);
      this.loadTopic();
      this.loadNb();
      console.log("delete from console")
    }
      );
      this.modalService.dismissAll();
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

     updateNbSeen()
     {
       let userId= localStorage['iduser'];
       this.service.updateNbSeenPerTopic(this.id, userId).subscribe(data =>
        console.log("NB SEEN"))
     }

}
