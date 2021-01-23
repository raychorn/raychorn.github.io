import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as $ from 'jquery';

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
import { WasmPythonReplComponent } from './components/main-pages/wasm-python-repl/wasm-python-repl.component';
import { WasmDev1Component } from './components/main-pages/wasm-dev1/wasm-dev1.component';
import { PublicationsListComponent } from './components/publications/publications-list/publications-list.component';
import { WordCloudTagComponent } from './services/word-cloud/word-cloud-tag/word-cloud-tag.component';

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
    WasmSample1Component,
    WasmPythonReplComponent,
    WasmDev1Component,
    PublicationsListComponent,
    WordCloudTagComponent
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
