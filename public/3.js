(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./lib/sel/select.component.js":
/*!*************************************!*\
  !*** ./lib/sel/select.component.js ***!
  \*************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var _ng_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng/select */ "./node_modules/@ng/select/dist/es2015/select.js");



const _c0 = ["text", "test 1", "value", "1"];
const _c1 = ["text", "test 2", "value", "2"];
const _c2 = ["text", "test 3", "value", "3"];
class SelectComponent {
}
SelectComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdefineComponent"]({ type: SelectComponent, selectors: [["select-cmp"]], factory: function SelectComponent_Factory(t) { return new (t || SelectComponent)(); }, consts: 4, vars: 0, template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementStart"](0, "ng-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelement"](1, "option", _c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelement"](2, "option", _c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelement"](3, "option", _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵelementEnd"]();
    } }, directives: [_ng_select__WEBPACK_IMPORTED_MODULE_1__["NgSelectComponent"], _ng_select__WEBPACK_IMPORTED_MODULE_1__["OptionComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'select-cmp',
                templateUrl: 'select.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null);


/***/ })

}]);
//# sourceMappingURL=3.js.map