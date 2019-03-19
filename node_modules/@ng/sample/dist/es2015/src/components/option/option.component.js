/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
/**
 * Component used for options in select component
 * @template TValue
 */
export class OptionComponent {
    constructor() {
        //######################### public properties - template bindings #########################
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
}
OptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-select option',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
OptionComponent.propDecorators = {
    value: [{ type: Input }],
    text: [{ type: Input }]
};
if (false) {
    /**
     * Indication whether is item active
     * @type {?}
     */
    OptionComponent.prototype.active;
    /**
     * Indication whether this option is selected
     * @type {?}
     */
    OptionComponent.prototype.selected;
    /**
     * Value that will be used if this option will be selected
     * @type {?}
     */
    OptionComponent.prototype.value;
    /**
     * Text that is displayed if this value is selected
     * @type {?}
     */
    OptionComponent.prototype.text;
    /**
     * If specified this option will be displayed in group
     * @type {?}
     */
    OptionComponent.prototype.group;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFheEUsTUFBTSxPQUFPLGVBQWU7SUFONUI7UUFRSSwyRkFBMkY7Ozs7O1FBS3BGLFdBQU0sR0FBWSxLQUFLLENBQUM7Ozs7UUFLeEIsYUFBUSxHQUFZLEtBQUssQ0FBQzs7Ozs7UUFxQjFCLFVBQUssR0FBVyxJQUFJLENBQUM7SUFDaEMsQ0FBQzs7O1lBeENBLFNBQVMsU0FDVjtnQkFDSSxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDs7O29CQW9CSSxLQUFLO21CQU1MLEtBQUs7Ozs7Ozs7SUFsQk4saUNBQStCOzs7OztJQUsvQixtQ0FBaUM7Ozs7O0lBT2pDLGdDQUNxQjs7Ozs7SUFLckIsK0JBQ29COzs7OztJQU9wQixnQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtOZ1NlbGVjdE9wdGlvbn0gZnJvbSBcIi4vb3B0aW9uLmludGVyZmFjZVwiO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB1c2VkIGZvciBvcHRpb25zIGluIHNlbGVjdCBjb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnbmctc2VsZWN0IG9wdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3B0aW9uQ29tcG9uZW50PFRWYWx1ZT4gaW1wbGVtZW50cyBOZ1NlbGVjdE9wdGlvbjxUVmFsdWU+XHJcbntcclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwdWJsaWMgcHJvcGVydGllcyAtIHRlbXBsYXRlIGJpbmRpbmdzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRpb24gd2hldGhlciBpcyBpdGVtIGFjdGl2ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0aW9uIHdoZXRoZXIgdGhpcyBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIHB1YmxpYyBwcm9wZXJ0aWVzIC0gaW5wdXRzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbHVlIHRoYXQgd2lsbCBiZSB1c2VkIGlmIHRoaXMgb3B0aW9uIHdpbGwgYmUgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB2YWx1ZTogVFZhbHVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGV4dCB0aGF0IGlzIGRpc3BsYXllZCBpZiB0aGlzIHZhbHVlIGlzIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgcHVibGljIHByb3BlcnRpZXMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgc3BlY2lmaWVkIHRoaXMgb3B0aW9uIHdpbGwgYmUgZGlzcGxheWVkIGluIGdyb3VwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBncm91cDogc3RyaW5nID0gbnVsbDtcclxufSJdfQ==