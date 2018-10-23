var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ɵrenderComponent as renderComponent } from '@angular/core';
import * as i0 from "@angular/core";
let HelloWorld = class HelloWorld {
    constructor() {
        this.name = 'World!';
    }
};
HelloWorld.ngComponentDef = i0.ɵdefineComponent({ type: HelloWorld, selectors: [["hello-world"]], factory: function HelloWorld_Factory(t) { return new (t || HelloWorld)(); }, features: [i0.ɵPublicFeature], consts: 2, vars: 1, template: function HelloWorld_Template(rf, ctx) { if (rf & 1) {
        i0.ɵelementStart(0, "h3");
        i0.ɵtext(1);
        i0.ɵelementEnd();
    } if (rf & 2) {
        i0.ɵtextBinding(1, i0.ɵinterpolation1("Hello ", ctx.name, ""));
    } } });
HelloWorld = __decorate([
    Component({
        selector: 'hello-world',
        template: `
    <h3>Hello {{name}}</h3>
  `
    })
], HelloWorld);
export { HelloWorld };
renderComponent(HelloWorld);
