/*
 * @Author: your name
 * @Date: 2020-02-24 00:01:39
 * @LastEditTime: 2020-02-24 00:25:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmlms-web/src/app/layout/common/notification/notification.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }
  messageSize = 14;
  messages = ['Server Error Reports', 'Server Error Reports', 'Server Error Reports'];

  ngOnInit(): void {
    this.messageSize = this.messages.length
  }

}
