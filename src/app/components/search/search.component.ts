import { Component } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {User} from '../../../User';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: `./search.component.html`,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  searchStr:string;
  searchRes:User[];

  constructor(private _githubService: GithubService){
    
  }
  
  getUsers(){
    this._githubService.getUsers(this.searchStr).subscribe(res =>{
      this.searchRes=res.items;
    });
  };
}
 