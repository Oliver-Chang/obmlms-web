/*
 * @Author: your name
 * @Date: 2020-02-20 16:26:32
 * @LastEditTime: 2020-02-21 00:08:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmlms-web/src/app/routes/routes-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLayoutComponent  } from '../layout/common/common.component'


const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
