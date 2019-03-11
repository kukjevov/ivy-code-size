import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";

@Component(
{
    selector: 'lazy-component',
    template: 
    `<div (click)="toggle()">TEST LAZY COMPONENT</div>
    <div *ngIf="cond">Inside IF</div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponent
{
    cond = false;

    constructor(private _changeDetector: ChangeDetectorRef)
    {
    }

    toggle()
    {
        this.cond = !this.cond;
        console.log('cond');
        this._changeDetector.detectChanges();
    }
}