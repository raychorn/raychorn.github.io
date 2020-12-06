import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { Main1Component } from './components/main-pages/main1/main1.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      //{ path: '', component: Main1Component, pathMatch: 'full' },
      //{ path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
      //{ path: 'services', component: ServicesComponent, pathMatch: 'full' },
      //{ path: 'contact-us', component: ContactUsComponent, pathMatch: 'full' },
      //{ path: 'consultation', component: ConsultationComponent, pathMatch: 'full' },
      //{ path: 'message-sent', component: MessageSentComponent, pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
