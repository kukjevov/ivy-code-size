/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, EventEmitter, QueryList, ViewChildren } from "@angular/core";
import { OptionComponent } from "./option.component";
/**
 * Component used for options group in select component
 * @template TValue
 */
var OptGroupComponent = /** @class */ (function () {
    function OptGroupComponent() {
        //######################### private fields #########################
        //######################### private fields #########################
        /**
         * Instance of event emitter for optionsChange
         */
        this._optionsChange = new EventEmitter();
    }
    Object.defineProperty(OptGroupComponent.prototype, "options", {
        //######################### public properties #########################
        /**
         * Options assigned to this options group
         */
        get: 
        //######################### public properties #########################
        /**
         * Options assigned to this options group
         * @return {?}
         */
        function () {
            return this.optionsChildren.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptGroupComponent.prototype, "optionsChange", {
        /**
         * Occurs when options in this group change
         */
        get: /**
         * Occurs when options in this group change
         * @return {?}
         */
        function () {
            return this._optionsChange;
        },
        enumerable: true,
        configurable: true
    });
    //######################### public methods - implementation of AfterViewInit #########################
    /**
     * Called when view was initialized
     */
    //######################### public methods - implementation of AfterViewInit #########################
    /**
     * Called when view was initialized
     * @return {?}
     */
    OptGroupComponent.prototype.ngAfterViewInit = 
    //######################### public methods - implementation of AfterViewInit #########################
    /**
     * Called when view was initialized
     * @return {?}
     */
    function () {
        var _this = this;
        this.optionsChildren.changes.subscribe((/**
         * @return {?}
         */
        function () {
            _this._optionsChange.emit();
        }));
    };
    OptGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-select>optgroup',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    OptGroupComponent.propDecorators = {
        optionsChildren: [{ type: ViewChildren, args: [OptionComponent,] }],
        text: [{ type: Input }]
    };
    return OptGroupComponent;
}());
export { OptGroupComponent };
if (false) {
    /**
     * Instance of event emitter for optionsChange
     * @type {?}
     * @private
     */
    OptGroupComponent.prototype._optionsChange;
    /**
     * Children options in this group
     * \@internal
     * @type {?}
     */
    OptGroupComponent.prototype.optionsChildren;
    /**
     * Text that is displayed for this options group
     * @type {?}
     */
    OptGroupComponent.prototype.text;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0Z3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvb3B0aW9uL29wdGdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRTlILE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPbkQ7SUFBQTtRQVFJLG9FQUFvRTs7Ozs7UUFLNUQsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWlEMUUsQ0FBQztJQTFDRyxzQkFBVyxzQ0FBTztRQUxsQix1RUFBdUU7UUFFdkU7O1dBRUc7Ozs7Ozs7UUFDSDtZQUVJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUtELHNCQUFXLDRDQUFhO1FBSHhCOztXQUVHOzs7OztRQUNIO1lBRUksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBbUJELHNHQUFzRztJQUV0Rzs7T0FFRzs7Ozs7O0lBQ0ksMkNBQWU7Ozs7OztJQUF0QjtRQUFBLGlCQU1DO1FBSkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7O1FBQUM7WUFFbkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTdESixTQUFTLFNBQ1Y7b0JBQ0ksUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2xEOzs7a0NBa0NJLFlBQVksU0FBQyxlQUFlO3VCQVE1QixLQUFLOztJQWVWLHdCQUFDO0NBQUEsQUE5REQsSUE4REM7U0F4RFksaUJBQWlCOzs7Ozs7O0lBTzFCLDJDQUFzRTs7Ozs7O0lBMEJ0RSw0Q0FDMEQ7Ozs7O0lBTzFELGlDQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEV2ZW50RW1pdHRlciwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIEFmdGVyVmlld0luaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge09wdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vb3B0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05nU2VsZWN0T3B0R3JvdXB9IGZyb20gXCIuL29wdGdyb3VwLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge05nU2VsZWN0T3B0aW9ufSBmcm9tIFwiLi9vcHRpb24uaW50ZXJmYWNlXCI7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHVzZWQgZm9yIG9wdGlvbnMgZ3JvdXAgaW4gc2VsZWN0IGNvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudChcclxue1xyXG4gICAgc2VsZWN0b3I6ICduZy1zZWxlY3Q+b3B0Z3JvdXAnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdEdyb3VwQ29tcG9uZW50PFRWYWx1ZT4gaW1wbGVtZW50cyBOZ1NlbGVjdE9wdEdyb3VwPFRWYWx1ZT4sIEFmdGVyVmlld0luaXRcclxue1xyXG4gICAgLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIHByaXZhdGUgZmllbGRzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbmNlIG9mIGV2ZW50IGVtaXR0ZXIgZm9yIG9wdGlvbnNDaGFuZ2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfb3B0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwdWJsaWMgcHJvcGVydGllcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25zIGFzc2lnbmVkIHRvIHRoaXMgb3B0aW9ucyBncm91cFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTogTmdTZWxlY3RPcHRpb248VFZhbHVlPltdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc0NoaWxkcmVuLnRvQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9jY3VycyB3aGVuIG9wdGlvbnMgaW4gdGhpcyBncm91cCBjaGFuZ2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvcHRpb25zQ2hhbmdlKCk6IEV2ZW50RW1pdHRlcjx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zQ2hhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwdWJsaWMgcHJvcGVydGllcyAtIGNoaWxkcmVuICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoaWxkcmVuIG9wdGlvbnMgaW4gdGhpcyBncm91cFxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIEBWaWV3Q2hpbGRyZW4oT3B0aW9uQ29tcG9uZW50KVxyXG4gICAgcHVibGljIG9wdGlvbnNDaGlsZHJlbjogUXVlcnlMaXN0PE5nU2VsZWN0T3B0aW9uPFRWYWx1ZT4+O1xyXG5cclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwdWJsaWMgcHJvcGVydGllcyAtIGlucHV0cyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZXh0IHRoYXQgaXMgZGlzcGxheWVkIGZvciB0aGlzIG9wdGlvbnMgZ3JvdXBcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIHB1YmxpYyBtZXRob2RzIC0gaW1wbGVtZW50YXRpb24gb2YgQWZ0ZXJWaWV3SW5pdCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyB3YXMgaW5pdGlhbGl6ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zQ2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNDaGFuZ2UuZW1pdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19