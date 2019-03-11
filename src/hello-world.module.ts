import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';


import { HelloWorld } from './hello-world';
import {LazyComponent} from './lazy.component';


@NgModule({
  imports:
  [
    CommonModule
  ],
  declarations: [
    HelloWorld,
    LazyComponent
  ]
})
export class HelloWorldModule { }
