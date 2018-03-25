import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { User } from '../../../User';
import {GithubService} from '../../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  login : string;
  repositoryRes : any[];
  username: string
  searchStr: string;
  searchRes: User[];
  followersRes: any[];

  constructor(
    private _githubService: GithubService,
    private _route:ActivatedRoute){
    
  }


  ngOnInit(){
    console.log(this._route.snapshot.params)
    const parameter = this._route.snapshot.params.login;
    this.getUser(parameter)
    this.getRepos(parameter)
    this.getFollowers(parameter)
  }

  getUser(param:string){
    this._githubService.getUser(param).subscribe(res =>{
      this.searchRes = res;
    });
    }

  getRepos(param1:string){
    this._githubService.getRepos(param1).subscribe(res =>{
      this.repositoryRes = res;
    });
  }

  getFollowers(param:string){
    this._githubService.getFollow(param).subscribe(res =>{
      this.followersRes = res;
    });
  }

 }
