import { User } from 'src/app/entities/user';
import { Topic } from './../../entities/Topics';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Forum } from 'src/app/entities/Forum';
import { Post } from 'src/app/entities/Post';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http:HttpClient, private router:Router) { }
  urlForum = '/crmproject-web/rest/forum/';
  getForums()
  {
    return this.http.get<Forum>(this.urlForum + "all");
  }

  addForum( f: Forum) {
    return this.http.post<Forum>(this.urlForum+ "add?name="+f.name+"&description="+f.description+"&picture="+f.picture, null);
  }
 DeleteForum(id){

   return this.http.delete<Forum>(this.urlForum + 'delete?id=' + id , null );
 }
 updateForum (f: Forum, id)
 {
   return this.http.put<Forum>(this.urlForum+ + "update?name="+f.name+"&description="+f.description+"&picture="+f.picture, null);
 }
 popularForums()
 {
   return this.http.get<Forum>(this.urlForum + "popular");
 }

 getRelatedTopics(idForum)
 {
   return this.http.get<Topic>(this.urlForum + "topicsOfForum?idForum="+idForum);

 }

 getUser(idTopic)
 {
  return this.http.get<User>(this.urlForum + "getUser?id="+idTopic);

 }

 getTopicById(id)
 {

   return this.http.get<Topic> (this.urlForum+ "byid?id="+id);
 }

 getNbPosts(idTopic)
 {
   return this.http.get(this.urlForum+"nb?idTopic="+idTopic);
 }

 addPost(idUser, idTopic, message)
 {
   return this.http.post<Post>(this.urlForum+"addPost?text="+message+"&idTopic="+idTopic
   +"&idUser="+idUser
   , null);
 }

 addTopic ( idForum, text)
 {
   console.log("IDDDDD+++ "+ localStorage['iduser'] + localStorage.getItem['UserName'] )
    let idUser = localStorage['iduser'];
    console.log("ID USER TO TOPIC *****" + idUser)
   return this.http.post(this.urlForum+ "addTopic?title="+text+"&idForum="+idForum+"&idUser="+ idUser,null);

  }

  sendMail(object, message)
  {
    return this.http.get(this.urlForum+ "sendMail?object="+object+"&message="+message);
  }

  deletePost(id)
  {
    console.log("POST TO DELEEETE " + id )
    return this.http.delete(this.urlForum+"deletePost?id="+id);
  }

  updateNbSeenPerTopic(idTopic, idUser)
  {
    return this.http.get(this.urlForum+ "postsPerTopic?idTopic="+idTopic+"&idUser="+idUser);

  }

}
