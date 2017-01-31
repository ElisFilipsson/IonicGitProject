import { Component } from '@angular/core';
import { App, NavController, Nav, NavParams } from 'ionic-angular';

// Model
import { User } from '../../models/user';

// Provider
import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-my-git',
  templateUrl: 'my-git.html'
})
export class MyGitPage {
  username = {}
  //user: User;
  title: string;

  constructor(public nav: NavController, public navParams: NavParams, private githubUsers: GithubUsers, private app: App ) {
    this.title = localStorage.getItem('user');
    
    githubUsers.getUser(this.title).subscribe(user => {
      this.username = user;
    })
  }
  goBack():void {
    this.app.getRootNav().pop()
  }
}
