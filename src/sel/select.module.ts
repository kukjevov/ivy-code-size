import {NgModule} from '@angular/core';
import {NgSelectModule} from '@ng/select';

import {SelectComponent} from './select.component';



@NgModule(
{
  imports:
  [
      NgSelectModule
  ],
  declarations: 
  [
    SelectComponent
  ]
})
export class SelectModule 
{
}