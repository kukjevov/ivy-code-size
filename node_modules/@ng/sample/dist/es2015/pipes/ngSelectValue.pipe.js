var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
/**
 * Pipe to transform ng select selected option into
 */
let NgSelectValuePipe = class NgSelectValuePipe {
    //######################### public methods #########################
    /**
     * Transforms selected option into string
     */
    transform() {
        return '';
    }
};
NgSelectValuePipe = __decorate([
    Pipe({ name: 'ngSelectValue' })
], NgSelectValuePipe);
export { NgSelectValuePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdTZWxlY3RWYWx1ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BpcGVzL25nU2VsZWN0VmFsdWUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUVsRDs7R0FFRztBQUVILElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBRTFCLG9FQUFvRTtJQUVwRTs7T0FFRztJQUNJLFNBQVM7UUFFWixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Q0FDSixDQUFBO0FBWFksaUJBQWlCO0lBRDdCLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsQ0FBQztHQUNqQixpQkFBaUIsQ0FXN0I7U0FYWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIFBpcGUgdG8gdHJhbnNmb3JtIG5nIHNlbGVjdCBzZWxlY3RlZCBvcHRpb24gaW50b1xyXG4gKi9cclxuQFBpcGUoe25hbWU6ICduZ1NlbGVjdFZhbHVlJ30pXHJcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdFZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm1cclxue1xyXG4gICAgLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIHB1YmxpYyBtZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm1zIHNlbGVjdGVkIG9wdGlvbiBpbnRvIHN0cmluZ1xyXG4gICAgICovICAgXHJcbiAgICBwdWJsaWMgdHJhbnNmb3JtKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxufVxyXG5cclxuIl19