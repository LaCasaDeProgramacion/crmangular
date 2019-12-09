import { Post } from './Post';
import { Topic } from './Topics';
import { Forum } from './Forum';
import { User } from 'src/app/entities/user';
export interface Topic{
  id ?: number ;
  title  ?:string;
  nb_seen ?: number ;
  creation_date ?:Date;
  user ?:User;
  forum ?: Forum ;
  posts ?: Post[];
}
