import { ForumService } from './../../../services/prospectingManagement/forum.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.scss']
})
export class AllTopicsComponent implements OnInit {

  topics;
  id ;
  nb=0;
title;
  constructor( private forumService:ForumService, private router: Router,private route: ActivatedRoute )
   {
      this.route.paramMap.subscribe(params => {
        this.id = params.get("id")
      });
      this.loadTopics();
   }

  loadTopics()
  {
    this.forumService.getRelatedTopics(this.id).subscribe(
      data=> {
        this.topics = data ;
        this.topics.forEach(element => {
           console.log(element.user.firstName)
           console.log(element.title)
           this.title = element.forum.name;


        });
      })
  }

  ngOnInit() {
  }

}
