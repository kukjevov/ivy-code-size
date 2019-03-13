var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
/**
 * Component used for options in select component
 */
let OptionComponent = class OptionComponent {
    /**
     * Component used for options in select component
     */
    constructor() {
        //######################### public properties - template bindings #########################
        /**
         * Indication whether is item active
         */
        this.active = false;
        /**
         * Indication whether this option is selected
         */
        this.selected = false;
        //######################### public properties #########################
        /**
         * If specified this option will be displayed in group
         */
        this.group = null;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], OptionComponent.prototype, "value");
__decorate([
    Input(),
    __metadata("design:type", String)
], OptionComponent.prototype, "text");
OptionComponent = __decorate([
    Component({
        selector: 'ng-select option',
        template: '',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OptionComponent);
export { OptionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXhFOztHQUVHO0FBT0gsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQVQ1Qjs7T0FFRztJQUNIO1FBUUksMkZBQTJGO1FBRTNGOztXQUVHO1FBQ0ksV0FBTSxHQUFZLEtBQUssQ0FBQztRQUUvQjs7V0FFRztRQUNJLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFnQmpDLHVFQUF1RTtRQUV2RTs7V0FFRztRQUNJLFVBQUssR0FBVyxJQUFJLENBQUM7SUFDaEMsQ0FBQztDQUFBLENBQUE7QUFkRztJQURDLEtBQUssRUFBRTs7c0NBQ2E7QUFNckI7SUFEQyxLQUFLLEVBQUU7O3FDQUNZO0FBMUJYLGVBQWU7SUFOM0IsU0FBUyxDQUNWO1FBQ0ksUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsRUFBRTtRQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2xELENBQUM7R0FDVyxlQUFlLENBa0MzQjtTQWxDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7TmdTZWxlY3RPcHRpb259IGZyb20gXCIuL29wdGlvbi5pbnRlcmZhY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdXNlZCBmb3Igb3B0aW9ucyBpbiBzZWxlY3QgY29tcG9uZW50XHJcbiAqL1xyXG5AQ29tcG9uZW50KFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ25nLXNlbGVjdCBvcHRpb24nLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdGlvbkNvbXBvbmVudDxUVmFsdWU+IGltcGxlbWVudHMgTmdTZWxlY3RPcHRpb248VFZhbHVlPlxyXG57XHJcbiAgICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgcHVibGljIHByb3BlcnRpZXMgLSB0ZW1wbGF0ZSBiaW5kaW5ncyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0aW9uIHdoZXRoZXIgaXMgaXRlbSBhY3RpdmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGlvbiB3aGV0aGVyIHRoaXMgb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwdWJsaWMgcHJvcGVydGllcyAtIGlucHV0cyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSB0aGF0IHdpbGwgYmUgdXNlZCBpZiB0aGlzIG9wdGlvbiB3aWxsIGJlIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgdmFsdWU6IFRWYWx1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRleHQgdGhhdCBpcyBkaXNwbGF5ZWQgaWYgdGhpcyB2YWx1ZSBpcyBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxuICAgIFxyXG4gICAgLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIHB1YmxpYyBwcm9wZXJ0aWVzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHNwZWNpZmllZCB0aGlzIG9wdGlvbiB3aWxsIGJlIGRpc3BsYXllZCBpbiBncm91cFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ3JvdXA6IHN0cmluZyA9IG51bGw7XHJcbn0iXX0=