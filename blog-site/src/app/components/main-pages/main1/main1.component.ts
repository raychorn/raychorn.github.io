import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component implements OnInit {

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

  public isWASMSupported: boolean = false;

  refreshNavUsing(url: string): void {
    console.info('Main1Component.refreshNavUsing :: url-> ' + url);
    this.isHome = (url == '');
    this.isLanguagesAndTech = (url == 'languages-and-technologies');
    this.isGithubStats = (url == 'github-stats');
    this.isWASMSample1 = (url == 'wasm-sample1');
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

  isOnHome(): boolean {
    return this.isHome == true;
  }

  isNotLanguagesAndTech(): boolean {
    return this.isLanguagesAndTech == false;
  }

  isOnLanguagesAndTech(): boolean {
    return this.isLanguagesAndTech == true;
  }

  isNotGithubStats(): boolean {
    return this.isGithubStats == false;
  }

  isOnGithubStats(): boolean {
    return this.isGithubStats == true;
  }

  isNotWASMSample1(): boolean {
    return this.isWASMSample1 == false;
  }

  isOnWASMSample1(): boolean {
    return (this.isWASMSample1 == true) && (this.isWASMSupported);
  }

  ngOnInit(): void {
    this.refreshNav();
    this.isWASMSupported = this.cookieService.check('wasm-support');
    console.info('Main1Component :: this.isWASMSupported -> ' + this.isWASMSupported);
  }

}
