import { Component } from '@angular/core';
import {ProfileComponent } from './components/profile/profile.component'
import {SearchComponent } from './components/search/search.component'
import {GithubService} from './services/github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'app';
}
