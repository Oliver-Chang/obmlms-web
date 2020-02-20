/*
 * @Author: your name
 * @Date: 2020-02-20 16:26:32
 * @LastEditTime: 2020-02-21 00:31:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmlms-web/src/app/app.module.ts
 */
/*
 * @Author: your name
 * @Date: 2020-02-20 16:26:32
 * @LastEditTime: 2020-02-21 00:28:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmlms-web/src/app/app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';


import { LayoutModule } from './layout/layout.module'
import { RoutesModule } from './routes/routes.module'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    FlexLayoutModule,


    LayoutModule,
    RoutesModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
