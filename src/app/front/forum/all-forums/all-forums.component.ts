import { ForumService } from './../../../services/prospectingManagement/forum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-forums',
  templateUrl: './all-forums.component.html',
  styleUrls: ['./all-forums.component.scss']
})
export class AllForumsComponent implements OnInit {

  constructor(private forumService:ForumService) {
    this.loadForums();
  }

  forums ;
  ngOnInit() {

  }
  loadForums()
  {
    this.forumService.getForums().subscribe(data=> {
      this.forums= data ;
    })
  }

}
