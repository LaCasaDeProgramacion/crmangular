import { User } from './user';
export interface Post {
  id ?: number ;
  text ?: string ;
  date_post ?: Date ;
  user ?: User ;
}
