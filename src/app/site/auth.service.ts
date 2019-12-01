import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser:IUser 
  constructor(private userService:UserService) { }

  authenticate(username:string,password:string)
  {
    this.loggedInUser = this.userService.getUser(username)
    if(this.loggedInUser!=null && this.loggedInUser.username == username && this.loggedInUser.password == password)
    {
      return this.loggedInUser
    }
    else
    {
      return null
    }
  }
}
