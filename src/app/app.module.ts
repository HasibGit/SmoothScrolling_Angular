import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  //scrollPositionRestoration: "enabled"
};

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes, routerOptions),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
