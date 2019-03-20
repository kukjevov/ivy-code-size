(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./lib/lazyRoute/lazyRoute.component.js":
/*!**********************************************!*\
  !*** ./lib/lazyRoute/lazyRoute.component.js ***!
  \**********************************************/
/*! exports provided: LazyRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyRouteComponent", function() { return LazyRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var _ng_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng/common */ "./node_modules/@ng/common/dist/es2015/common.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ "./lib/provider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






const _c0 = [3, "click"];
const _c1 = [4, "ngIf"];
const _c2 = [4, "ngFor", "ngForOf"];
function LazyRouteComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtext"](1, "cond ngIf");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
} }
function LazyRouteComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
} if (rf & 2) {
    const obj_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵflushHooksUpTo"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtextBinding"](1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinterpolation1"]("\"", obj_r7, "\""));
} }
let LazyRouteComponent = class LazyRouteComponent {
    constructor(provideClass) {
        this.cond = false;
        this.arrayObj = ['prvy', 'druhy', 'treti'];
        console.log("lazy", provideClass);
    }
};
LazyRouteComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdefineComponent"]({ type: LazyRouteComponent, selectors: [["lazy-route-component"]], factory: function LazyRouteComponent_Factory(t) { return new (t || LazyRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdirectiveInject"](_provider__WEBPACK_IMPORTED_MODULE_2__["ProvideClass"])); }, consts: 6, vars: 2, template: function LazyRouteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtext"](1, "lazy route component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](2, "button", _c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlistener"]("click", function LazyRouteComponent_Template_button_click_2_listener($event) { return ctx.cond = !ctx.cond; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtext"](3, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtemplate"](4, LazyRouteComponent_div_4_Template, 2, 0, "div", _c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtemplate"](5, LazyRouteComponent_div_5_Template, 2, 1, "div", _c2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵflushHooksUpTo"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementProperty"](4, "ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbind"](ctx.cond));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵflushHooksUpTo"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementProperty"](5, "ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbind"](ctx.arrayObj));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
LazyRouteComponent = __decorate([
    Object(_ng_common__WEBPACK_IMPORTED_MODULE_1__["ComponentRoute"])({ path: '' }),
    __metadata("design:paramtypes", [_provider__WEBPACK_IMPORTED_MODULE_2__["ProvideClass"]])
], LazyRouteComponent);

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyRouteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lazy-route-component',
                templateUrl: 'lazyRoute.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _provider__WEBPACK_IMPORTED_MODULE_2__["ProvideClass"] }]; }, null);


/***/ }),

/***/ "./lib/lazyRoute/lazyRoute.module.js":
/*!*******************************************!*\
  !*** ./lib/lazyRoute/lazyRoute.module.js ***!
  \*******************************************/
/*! exports provided: LazyRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyRouteModule", function() { return LazyRouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var _lazyRoute_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazyRoute.routes */ "./lib/lazyRoute/lazyRoute.routes.js");
/* harmony import */ var _moduleRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moduleRoutes */ "./lib/moduleRoutes.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ "./lib/provider.js");
/* harmony import */ var _lazyRoute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazyRoute.component */ "./lib/lazyRoute/lazyRoute.component.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let LazyRouteModule = class LazyRouteModule {
};
LazyRouteModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdefineNgModule"]({ type: LazyRouteModule, declarations: [_lazyRoute_component__WEBPACK_IMPORTED_MODULE_5__["LazyRouteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
LazyRouteModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjector"]({ factory: function LazyRouteModule_Factory(t) { return new (t || LazyRouteModule)(); }, providers: [
        {
            provide: _provider__WEBPACK_IMPORTED_MODULE_4__["ProvideClass"],
            useValue: {
                value: "my lazy module value"
            }
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
LazyRouteModule = __decorate([
    Object(_moduleRoutes__WEBPACK_IMPORTED_MODULE_3__["ModuleRoutes"])(_lazyRoute_routes__WEBPACK_IMPORTED_MODULE_2__["components"])
], LazyRouteModule);

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyRouteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    ..._lazyRoute_routes__WEBPACK_IMPORTED_MODULE_2__["components"]
                ],
                providers: [
                    {
                        provide: _provider__WEBPACK_IMPORTED_MODULE_4__["ProvideClass"],
                        useValue: {
                            value: "my lazy module value"
                        }
                    }
                ]
            }]
    }], null, null);
console.log(LazyRouteModule);


/***/ }),

/***/ "./lib/lazyRoute/lazyRoute.routes.js":
/*!*******************************************!*\
  !*** ./lib/lazyRoute/lazyRoute.routes.js ***!
  \*******************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _lazyRoute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyRoute.component */ "./lib/lazyRoute/lazyRoute.component.js");

const components = [
    _lazyRoute_component__WEBPACK_IMPORTED_MODULE_0__["LazyRouteComponent"]
];


/***/ })

}]);
//# sourceMappingURL=0.js.map