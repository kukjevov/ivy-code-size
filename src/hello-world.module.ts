import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {HelloWorld} from './hello-world';


@NgModule(
{
  imports:
  [
    CommonModule,
    BrowserModule
  ],
  declarations: 
  [
    HelloWorld
  ],
  bootstrap:
  [
    HelloWorld
  ]
})
export class HelloWorldModule 
{
}
