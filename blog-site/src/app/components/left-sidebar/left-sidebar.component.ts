import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd  } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      var toks2 = event.url.split('/');
      var route = toks2[toks2.length - 1];
      this.refreshNavUsing(route);
    });
  }

  private router_url: string;

  public isHome: boolean = true;
  public isLanguagesAndTech: boolean = false;
  public isGithubStats: boolean = false;

  refreshNavUsing(url: string): void {
    console.info('LeftSidebarComponent.refreshNavUsing :: url-> ' + url);
    this.isHome = (url == '');
    this.isLanguagesAndTech = (url == 'languages-and-technologies');
    this.isGithubStats = (url == 'github-stats');
  }

  refreshNav(): void {
    var toks = window.location.href.split('//');
    var toks2 = toks[toks.length - 1].split('/');
    var route = toks2[toks2.length - 1];
    this.router_url = this.router.url;
    this.refreshNavUsing(route);
  }

  isNotHome(): boolean {
    return this.isHome == false;
  }

  isNotLanguagesAndTech(): boolean {
    return this.isLanguagesAndTech == false;
  }

  isNotGithubStats(): boolean {
    return this.isGithubStats == false;
  }


  ngOnInit(): void {
    this.refreshNav();
  }

}
