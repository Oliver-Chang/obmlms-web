/*
 * @Author: your name
 * @Date: 2020-02-20 20:00:53
 * @LastEditTime: 2020-02-24 00:23:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmlms-web/src/app/layout/layout.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './common/common.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserComponent } from './common/user/user.component';
import { NotificationComponent } from './common/notification/notification.component';
import {MatBadgeModule} from '@angular/material/badge';

import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [CommonLayoutComponent, UserComponent, NotificationComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatIconModule,
    MatListModule,
  ]
})
export class LayoutModule { }
