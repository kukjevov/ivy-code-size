var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, EventEmitter, QueryList, ViewChildren } from "@angular/core";
import { OptionComponent } from "./option.component";
/**
 * Component used for options group in select component
 */
let OptGroupComponent = class OptGroupComponent {
    /**
     * Component used for options group in select component
     */
    constructor() {
        //######################### private fields #########################
        /**
         * Instance of event emitter for optionsChange
         */
        this._optionsChange = new EventEmitter();
    }
    //######################### public properties #########################
    /**
     * Options assigned to this options group
     */
    get options() {
        return this.optionsChildren.toArray();
    }
    /**
     * Occurs when options in this group change
     */
    get optionsChange() {
        return this._optionsChange;
    }
    //######################### public methods - implementation of AfterViewInit #########################
    /**
     * Called when view was initialized
     */
    ngAfterViewInit() {
        this.optionsChildren.changes.subscribe(() => {
            this._optionsChange.emit();
        });
    }
};
__decorate([
    ViewChildren(OptionComponent),
    __metadata("design:type", QueryList)
], OptGroupComponent.prototype, "optionsChildren");
__decorate([
    Input(),
    __metadata("design:type", String)
], OptGroupComponent.prototype, "text");
OptGroupComponent = __decorate([
    Component({
        selector: 'ng-select>optgroup',
        template: '',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OptGroupComponent);
export { OptGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0Z3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvb3B0aW9uL29wdGdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFOUgsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBSW5EOztHQUVHO0FBT0gsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFUOUI7O09BRUc7SUFDSDtRQVFJLG9FQUFvRTtRQUVwRTs7V0FFRztRQUNLLG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7SUFpRDFFLENBQUM7SUEvQ0csdUVBQXVFO0lBRXZFOztPQUVHO0lBQ0gsSUFBVyxPQUFPO1FBRWQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsYUFBYTtRQUVwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQW1CRCxzR0FBc0c7SUFFdEc7O09BRUc7SUFDSSxlQUFlO1FBRWxCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFFeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFBO0FBdEJHO0lBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQzs4QkFDTixTQUFTO2tEQUF5QjtBQVExRDtJQURDLEtBQUssRUFBRTs7dUNBQ1k7QUExQ1gsaUJBQWlCO0lBTjdCLFNBQVMsQ0FDVjtRQUNJLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLEVBQUU7UUFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNsRCxDQUFDO0dBQ1csaUJBQWlCLENBd0Q3QjtTQXhEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBFdmVudEVtaXR0ZXIsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBBZnRlclZpZXdJbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtPcHRpb25Db21wb25lbnR9IGZyb20gXCIuL29wdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZ1NlbGVjdE9wdEdyb3VwfSBmcm9tIFwiLi9vcHRncm91cC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtOZ1NlbGVjdE9wdGlvbn0gZnJvbSBcIi4vb3B0aW9uLmludGVyZmFjZVwiO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB1c2VkIGZvciBvcHRpb25zIGdyb3VwIGluIHNlbGVjdCBjb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoXHJcbntcclxuICAgIHNlbGVjdG9yOiAnbmctc2VsZWN0Pm9wdGdyb3VwJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRHcm91cENvbXBvbmVudDxUVmFsdWU+IGltcGxlbWVudHMgTmdTZWxlY3RPcHRHcm91cDxUVmFsdWU+LCBBZnRlclZpZXdJbml0XHJcbntcclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwcml2YXRlIGZpZWxkcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnN0YW5jZSBvZiBldmVudCBlbWl0dGVyIGZvciBvcHRpb25zQ2hhbmdlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX29wdGlvbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgcHVibGljIHByb3BlcnRpZXMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9ucyBhc3NpZ25lZCB0byB0aGlzIG9wdGlvbnMgZ3JvdXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvcHRpb25zKCk6IE5nU2VsZWN0T3B0aW9uPFRWYWx1ZT5bXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNDaGlsZHJlbi50b0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPY2N1cnMgd2hlbiBvcHRpb25zIGluIHRoaXMgZ3JvdXAgY2hhbmdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0NoYW5nZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc0NoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgcHVibGljIHByb3BlcnRpZXMgLSBjaGlsZHJlbiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGlsZHJlbiBvcHRpb25zIGluIHRoaXMgZ3JvdXBcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBAVmlld0NoaWxkcmVuKE9wdGlvbkNvbXBvbmVudClcclxuICAgIHB1YmxpYyBvcHRpb25zQ2hpbGRyZW46IFF1ZXJ5TGlzdDxOZ1NlbGVjdE9wdGlvbjxUVmFsdWU+PjtcclxuXHJcbiAgICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgcHVibGljIHByb3BlcnRpZXMgLSBpbnB1dHMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGV4dCB0aGF0IGlzIGRpc3BsYXllZCBmb3IgdGhpcyBvcHRpb25zIGdyb3VwXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG5cclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwdWJsaWMgbWV0aG9kcyAtIGltcGxlbWVudGF0aW9uIG9mIEFmdGVyVmlld0luaXQgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgd2FzIGluaXRpYWxpemVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMub3B0aW9uc0NoaWxkcmVuLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zQ2hhbmdlLmVtaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==