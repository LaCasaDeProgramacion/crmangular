import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/services/prospectingManagement/agent.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'src/app/entities/Agent';


@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.scss']
})
export class UpdateAgentComponent implements OnInit {

  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;
  public formsubmitted:boolean;
  public picturemap:string;


  closeResult: string;
  closeResult1: string;

agent2;
  id ;
picture;
  agent : Agent={id:0, cin:0, number:0 , firstName:'', lastName:'',
                 email:'', dateBirth:null, role:'',
                 drivenLicence:null, picture:''}

  constructor(private route: ActivatedRoute, private storage: AngularFireStorage,
    private service : AgentService, private router: Router, private modalService: NgbModal) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")

    });
     this.loadAgent();

   }
  ngOnInit() {

  }

  loadAgent()
  {
    this.service.getById(this.id).subscribe(data=>
      {
         this.agent=data;
         this.picture = data.picture;
        this.picture = this.agent.picture;
      }
      );


  }

  openarchive(content) {


       this.modalService.open(content,{ariaLabelledBy: 'modal1-title-notification'}).result.then((result) => {
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

  onclickenvoyer(e , content ){

    var pictureinfo :any[] =this.testComponent.handleSubmit(e);
    var filePath = `${pictureinfo['name'].split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, pictureinfo).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
        console.log(url);
        this.picturemap=url;
        console.log(this.picturemap);

          this.agent.picture=this.picturemap;
          this.agent.role="CONTRACT";

          this.service.update(this.agent, this.id, this.agent.picture).subscribe(response => {
            console.log(response);

          });

        })
      })
    ).subscribe();
this.openarchive(content);

  }

  redirect()
  {
    this.modalService.dismissAll();
    this.router.navigate(['back/agents']);

  }
}
