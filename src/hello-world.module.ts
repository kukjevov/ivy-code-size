import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgSelectModule} from '@ng/sample';


import { HelloWorld } from './hello-world';
import {LazyComponent} from './lazy.component';


@NgModule({
  imports:
  [
    CommonModule,
    NgSelectModule
  ],
  declarations: [
    HelloWorld,
    LazyComponent
  ]
})
export class HelloWorldModule { }
