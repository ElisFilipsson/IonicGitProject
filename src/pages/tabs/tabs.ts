import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Pages for tabs
import { MyGitPage } from '../my-git/my-git';
import { ReposPage } from '../repos/repos';
import { AllReposPage } from '../all-repos/all-repos';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyGitPage;
  tab2Root: any = ReposPage;
  tab3Root: any = AllReposPage;
  
  constructor(public nav: NavController) {
  }
}
