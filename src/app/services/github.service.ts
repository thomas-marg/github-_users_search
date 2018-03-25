import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id='a026d3e630e9ab7d1bf1';
    private client_secret='1c6e80354e79a059ee76310c67f075747ca64224';
    private searchUrl: string;
    private searchStr: string;

    constructor(private _http:Http){
        this.username = 'thomas-marg';
    }

    getUsers(str:string){
        return this._http.get('https://api.github.com/search/users?q='+str+'&client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    getUser(param:string){
        return this._http.get('http://api.github.com/users/'+param+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    getRepos(param:string){
        return this._http.get('http://api.github.com/users/'+param+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }
    getFollow(param:string){
        return this._http.get('http://api.github.com/users/'+param+'/followers?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

}
