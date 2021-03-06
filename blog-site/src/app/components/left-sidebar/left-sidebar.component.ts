import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd  } from '@angular/router';

import { filter } from 'rxjs/operators';
import { CookieService } from 'src/app/services/cookie.service';


@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) {
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
  public isWASMSample1: boolean = false;
  public isWASMRELP1: boolean = false;
  public isWASMDev1: boolean = false;

  public isWASMSupported: boolean = false;

  refreshNavUsing(url: string): void {
    console.info('LeftSidebarComponent.refreshNavUsing :: url-> ' + url);
    this.isHome = (url == '');
    this.isLanguagesAndTech = (url == 'languages-and-technologies');
    this.isGithubStats = (url == 'github-stats');
    this.isWASMSample1 = (url == 'wasm-sample1');
    this.isWASMRELP1 = (url == 'wasm-repl1');
    this.isWASMDev1 = (url == 'wasm-dev1');
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

  isNotWASMSample1(): boolean {
    return (this.isWASMSample1 == false) && (this.isWASMSupported);
  }

  isNotWASMREPL1(): boolean {
    return (this.isWASMRELP1 == false) && (this.isWASMSupported);
  }

  isNotWASMDev1(): boolean {
    return (this.isWASMDev1 == false) && (this.isWASMSupported);
  }


  ngOnInit(): void {
    this.refreshNav();
    this.isWASMSupported = this.cookieService.check('wasm-support');
    console.info('LeftSidebarComponent :: this.isWASMSupported -> ' + this.isWASMSupported);
  }

}
