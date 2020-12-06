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
    LanguagesTechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
