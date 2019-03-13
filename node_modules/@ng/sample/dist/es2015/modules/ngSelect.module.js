var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectValuePipe } from '../pipes/ngSelectValue.pipe';
import { OptionComponent, OptGroupComponent } from '../components/option';
/**
 * Module for select and its options
 */
let NgSelectModule = class NgSelectModule {
};
NgSelectModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            OptionComponent,
            OptGroupComponent,
            NgSelectValuePipe
        ],
        exports: [
            OptionComponent,
            OptGroupComponent,
            NgSelectValuePipe
        ]
    })
], NgSelectModule);
export { NgSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdTZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvbmdTZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RTs7R0FFRztBQW9CSCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBRTFCLENBQUE7QUFGWSxjQUFjO0lBbkIxQixRQUFRLENBQ1Q7UUFDSSxPQUFPLEVBQ1A7WUFDSSxZQUFZO1NBQ2Y7UUFDRCxZQUFZLEVBQ1o7WUFDSSxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGlCQUFpQjtTQUNwQjtRQUNELE9BQU8sRUFDUDtZQUNJLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsaUJBQWlCO1NBQ3BCO0tBQ0osQ0FBQztHQUNXLGNBQWMsQ0FFMUI7U0FGWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtOZ1NlbGVjdFZhbHVlUGlwZX0gZnJvbSAnLi4vcGlwZXMvbmdTZWxlY3RWYWx1ZS5waXBlJztcclxuaW1wb3J0IHtPcHRpb25Db21wb25lbnQsIE9wdEdyb3VwQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL29wdGlvbic7XHJcblxyXG4vKipcclxuICogTW9kdWxlIGZvciBzZWxlY3QgYW5kIGl0cyBvcHRpb25zXHJcbiAqL1xyXG5ATmdNb2R1bGUoXHJcbntcclxuICAgIGltcG9ydHM6XHJcbiAgICBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOlxyXG4gICAgW1xyXG4gICAgICAgIE9wdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBPcHRHcm91cENvbXBvbmVudCxcclxuICAgICAgICBOZ1NlbGVjdFZhbHVlUGlwZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6XHJcbiAgICBbXHJcbiAgICAgICAgT3B0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIE9wdEdyb3VwQ29tcG9uZW50LFxyXG4gICAgICAgIE5nU2VsZWN0VmFsdWVQaXBlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdE1vZHVsZVxyXG57XHJcbn0iXX0=