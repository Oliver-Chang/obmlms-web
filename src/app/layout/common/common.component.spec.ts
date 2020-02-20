/*
 * @Author: your name
 * @Date: 2020-02-20 23:00:49
 * @LastEditTime: 2020-02-21 00:19:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmlms-web/src/app/layout/common/common.component.spec.ts
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLayoutComponent } from './common.component';


describe('CommonComponent', () => {
  let component: CommonLayoutComponent;
  let fixture: ComponentFixture<CommonLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
