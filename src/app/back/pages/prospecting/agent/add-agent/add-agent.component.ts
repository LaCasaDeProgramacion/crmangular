import { AgentService } from './../../../../../services/prospectingManagement/agent.service';
import { Agent } from 'src/app/entities/Agent';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageUploadComponent } from 'src/app/SharedComponent/image-upload/image-upload.component';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageUploadServicService } from 'src/app/SharedComponent/image-upload/image-upload-servic.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {

  @ViewChild(ImageUploadComponent)
  private testComponent : ImageUploadComponent;
  searchText;
  public formsubmitted:boolean;
  public picturemap:string;

  agent : Agent={id:0, cin:0, Number:0 , firstName:'', lastName:'',
                 email:'', dateBirth:null, role:'',
                 drivenLicence:null, picture:''}
  id ;
  constructor( private service:AgentService,private storage: AngularFireStorage,public serviceimage:ImageUploadServicService,
    private router: Router) { }

  ngOnInit() {
  }

  onclickenvoyer(e){
    var pictureinfo :any[] =this.testComponent.handleSubmit(e);
    console.log(pictureinfo);
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
    this.service.add(this.agent).subscribe(response => {

      console.log(response);
      this.id= response.id ;
      this.router.navigate(['back/addContract/'+this.id]);
    });
        })
      })
    ).subscribe();

    console.log(this.agent);


  }



}
