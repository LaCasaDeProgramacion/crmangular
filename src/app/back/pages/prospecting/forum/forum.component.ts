import { ForumService } from './../../../../services/prospectingManagement/forum.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { Forum } from 'src/app/entities/Forum';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageUploadServicService } from 'src/app/SharedComponent/image-upload/image-upload-servic.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;
  searchText;
  public formsubmitted:boolean;
  public picturemap:string;

  forum : Forum ={ id:0, name:'', description:'', picture:''};
  collection = { count: null, forums:null  };
  config:any;

  forumToDelete;
  closeResult: string;

  constructor( private forumService:ForumService,private modalService: NgbModal,
    private router: Router, private storage: AngularFireStorage,public serviceimage:ImageUploadServicService ) {
      this.loadForums();
    }



  ngOnInit() {
  }

  onclickenvoyer(e){
    var pictureinfo :any[] =this.testComponent.handleSubmit(e);
    var filePath = `${pictureinfo['name'].split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, pictureinfo).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.picturemap=url;
          console.log(this.picturemap);
          this.forum.picture=this.picturemap;
          this.forumService.addForum(this.forum).subscribe(response => {
            this.loadForums();
          });
        })
      })
    ).subscribe();
    console.log(this.forum);
  }

  deleteForum()
  {

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
  openarchive(content,id) {

    this.forumToDelete.id=id;
       this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }

  loadForums()
  {
    this.forumService.getForums().subscribe(data=>
      {
        this.collection.forums= data ;
      });
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.collection.count
      };
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
}
