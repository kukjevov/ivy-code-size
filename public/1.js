(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./lib/lazy2.component.js":
/*!********************************!*\
  !*** ./lib/lazy2.component.js ***!
  \********************************/
/*! exports provided: Lazy2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazy2Component", function() { return Lazy2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm2015/common.js");



const _c0 = [3, "click"];
const _c1 = [4, "ngFor", "ngForOf"];
function Lazy2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
} if (rf & 2) {
    const itm_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵflushHooksUpTo"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtextBinding"](1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinterpolation1"]("***", itm_r2, "***"));
} }
class Lazy2Component {
    constructor() {
        this.array = [];
    }
    add() {
        this.array.push(this.array.length);
    }
}
Lazy2Component.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdefineComponent"]({ type: Lazy2Component, selectors: [["lazy2-component"]], factory: function Lazy2Component_Factory(t) { return new (t || Lazy2Component)(); }, consts: 3, vars: 1, template: function Lazy2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](0, "button", _c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlistener"]("click", function Lazy2Component_Template_button_click_0_listener($event) { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtext"](1, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵtemplate"](2, Lazy2Component_div_2_Template, 2, 1, "div", _c1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵflushHooksUpTo"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementProperty"](2, "ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbind"](ctx.array));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Lazy2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lazy2-component',
                template: `<button (click)="add()">add</button>
    <div *ngFor="let itm of array">***{{itm}}***</div>`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null);


/***/ })

}]);
//# sourceMappingURL=1.js.map