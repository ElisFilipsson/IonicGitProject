import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Pages
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = {}

  constructor(public nav: NavController, public navParams: NavParams) {}

  enteredName() {
    const title = this.username['title'];
    localStorage.setItem('user', title);
    this.nav.push(TabsPage);

  }
}
