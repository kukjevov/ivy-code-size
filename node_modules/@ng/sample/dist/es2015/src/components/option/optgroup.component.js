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
export class OptGroupComponent {
    constructor() {
        //######################### private fields #########################
        //######################### private fields #########################
        /**
         * Instance of event emitter for optionsChange
         */
        this._optionsChange = new EventEmitter();
    }
    //######################### public properties #########################
    /**
     * Options assigned to this options group
     * @return {?}
     */
    get options() {
        return this.optionsChildren.toArray();
    }
    /**
     * Occurs when options in this group change
     * @return {?}
     */
    get optionsChange() {
        return this._optionsChange;
    }
    //######################### public methods - implementation of AfterViewInit #########################
    /**
     * Called when view was initialized
     * @return {?}
     */
    ngAfterViewInit() {
        this.optionsChildren.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this._optionsChange.emit();
        }));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0Z3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvb3B0aW9uL29wdGdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRTlILE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFhbkQsTUFBTSxPQUFPLGlCQUFpQjtJQU45QjtRQVFJLG9FQUFvRTs7Ozs7UUFLNUQsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWlEMUUsQ0FBQzs7Ozs7O0lBMUNHLElBQVcsT0FBTztRQUVkLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUtELElBQVcsYUFBYTtRQUVwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBd0JNLGVBQWU7UUFFbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBRXhDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUE3REosU0FBUyxTQUNWO2dCQUNJLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOzs7OEJBa0NJLFlBQVksU0FBQyxlQUFlO21CQVE1QixLQUFLOzs7Ozs7OztJQWxDTiwyQ0FBc0U7Ozs7OztJQTBCdEUsNENBQzBEOzs7OztJQU8xRCxpQ0FDb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBBZnRlclZpZXdJbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtPcHRpb25Db21wb25lbnR9IGZyb20gXCIuL29wdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZ1NlbGVjdE9wdEdyb3VwfSBmcm9tIFwiLi9vcHRncm91cC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtOZ1NlbGVjdE9wdGlvbn0gZnJvbSBcIi4vb3B0aW9uLmludGVyZmFjZVwiO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB1c2VkIGZvciBvcHRpb25zIGdyb3VwIGluIHNlbGVjdCBjb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnbmctc2VsZWN0Pm9wdGdyb3VwJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRHcm91cENvbXBvbmVudDxUVmFsdWU+IGltcGxlbWVudHMgTmdTZWxlY3RPcHRHcm91cDxUVmFsdWU+LCBBZnRlclZpZXdJbml0XHJcbntcclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwcml2YXRlIGZpZWxkcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnN0YW5jZSBvZiBldmVudCBlbWl0dGVyIGZvciBvcHRpb25zQ2hhbmdlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX29wdGlvbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgcHVibGljIHByb3BlcnRpZXMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9ucyBhc3NpZ25lZCB0byB0aGlzIG9wdGlvbnMgZ3JvdXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvcHRpb25zKCk6IE5nU2VsZWN0T3B0aW9uPFRWYWx1ZT5bXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNDaGlsZHJlbi50b0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPY2N1cnMgd2hlbiBvcHRpb25zIGluIHRoaXMgZ3JvdXAgY2hhbmdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0NoYW5nZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc0NoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgcHVibGljIHByb3BlcnRpZXMgLSBjaGlsZHJlbiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGlsZHJlbiBvcHRpb25zIGluIHRoaXMgZ3JvdXBcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBAVmlld0NoaWxkcmVuKE9wdGlvbkNvbXBvbmVudClcclxuICAgIHB1YmxpYyBvcHRpb25zQ2hpbGRyZW46IFF1ZXJ5TGlzdDxOZ1NlbGVjdE9wdGlvbjxUVmFsdWU+PjtcclxuXHJcbiAgICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgcHVibGljIHByb3BlcnRpZXMgLSBpbnB1dHMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGV4dCB0aGF0IGlzIGRpc3BsYXllZCBmb3IgdGhpcyBvcHRpb25zIGdyb3VwXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwdWJsaWMgbWV0aG9kcyAtIGltcGxlbWVudGF0aW9uIG9mIEFmdGVyVmlld0luaXQgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgd2FzIGluaXRpYWxpemVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMub3B0aW9uc0NoaWxkcmVuLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zQ2hhbmdlLmVtaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==