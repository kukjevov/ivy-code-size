import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';


import { HelloWorld } from './hello-world';


@NgModule({
  imports:
  [
    CommonModule
  ],
  declarations: [
    HelloWorld
  ]
})
export class HelloWorldModule { }
