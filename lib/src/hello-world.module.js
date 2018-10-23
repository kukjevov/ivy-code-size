var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { HelloWorld } from './hello-world';
import * as i0 from "@angular/core";
let HelloWorldModule = class HelloWorldModule {
};
HelloWorldModule.ngInjectorDef = i0.defineInjector({ factory: function HelloWorldModule_Factory() { return new HelloWorldModule(); }, providers: undefined, imports: [] });
HelloWorldModule = __decorate([
    NgModule({
        declarations: [
            HelloWorld
        ]
    })
], HelloWorldModule);
export { HelloWorldModule };
