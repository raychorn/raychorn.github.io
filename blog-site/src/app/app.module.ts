import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { Main1Component } from './components/main-pages/main1/main1.component';
import { LanguagesTechComponent } from './components/main-pages/languages-tech/languages-tech.component';
import { GithubStatsComponent } from './components/main-pages/github-stats/github-stats.component';
import { SampleProjectsComponent } from './components/main-pages/sample-projects/sample-projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule } from '@angular/material/tooltip';
import { WasmSample1Component } from './components/main-pages/wasm-sample1/wasm-sample1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainContentComponent,
    SiteLayoutComponent,
    Main1Component,
    LanguagesTechComponent,
    GithubStatsComponent,
    SampleProjectsComponent,
    WasmSample1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
