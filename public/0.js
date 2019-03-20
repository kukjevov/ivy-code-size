(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./lib/lazy.component.js":
/*!*******************************!*\
  !*** ./lib/lazy.component.js ***!
  \*******************************/
/*! exports provided: LazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyComponent", function() { return LazyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm2015/common.js");



const _c0 = [3, "click"];
const _c1 = [4, "ngIf"];
function LazyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtext"](1, "Inside IF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
} }
class LazyComponent {
    constructor() {
        this.cond = false;
    }
    toggle() {
        this.cond = !this.cond;
    }
}
LazyComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdefineComponent"]({ type: LazyComponent, selectors: [["lazy-component"]], factory: function LazyComponent_Factory(t) { return new (t || LazyComponent)(); }, consts: 3, vars: 1, template: function LazyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](0, "div", _c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlistener"]("click", function LazyComponent_Template_div_click_0_listener($event) { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtext"](1, "TEST LAZY COMPONENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtemplate"](2, LazyComponent_div_2_Template, 2, 0, "div", _c1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵflushHooksUpTo"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementProperty"](2, "ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbind"](ctx.cond));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lazy-component',
                template: `<div (click)="toggle()">TEST LAZY COMPONENT</div>
    <div *ngIf="cond">Inside IF</div>`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null);


/***/ })

}]);
//# sourceMappingURL=0.js.map