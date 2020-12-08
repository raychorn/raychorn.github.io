import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { Main1Component } from './components/main-pages/main1/main1.component';
import { LanguagesTechComponent } from './components/main-pages/languages-tech/languages-tech.component';
import { GithubStatsComponent } from './components/main-pages/github-stats/github-stats.component';
import { WasmSample1Component } from './components/main-pages/wasm-sample1/wasm-sample1.component';
import { WasmPythonReplComponent } from './components/main-pages/wasm-python-repl/wasm-python-repl.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: Main1Component, pathMatch: 'full' },
      { path: 'languages-and-technologies', component: LanguagesTechComponent, pathMatch: 'full' },
      { path: 'github-stats', component: GithubStatsComponent, pathMatch: 'full' },
      { path: 'wasm-sample1', component: WasmSample1Component, pathMatch: 'full' },
      { path: 'wasm-repl1', component: WasmPythonReplComponent, pathMatch: 'full' },
      { path: 'wasm-dev11', component: WasmPythonReplComponent, pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
