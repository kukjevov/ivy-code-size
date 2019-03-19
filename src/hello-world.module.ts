import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';


import { HelloWorld } from './hello-world';
import {LazyComponent} from './lazy.component';


@NgModule({
  imports:
  [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    HelloWorld,
    LazyComponent
  ],
  bootstrap:
  [
    HelloWorld
  ]
})
export class HelloWorldModule { }
