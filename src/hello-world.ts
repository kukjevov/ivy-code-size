import {
  Component,
  ɵrenderComponent as renderComponent,
  ɵComponentType as ComponentType,
  ChangeDetectorRef
} from '@angular/core'


@Component({
  selector: 'hello-world',
  template: `
    <div *ngIf="cond">toto je div</div>
    <button (click)="cond = !cond;invalidateVisuals();">click</button>
    <h3>Hello {{name}}</h3>
  `
})
export class HelloWorld {
  name = 'World!'
  cond: boolean = true;
  constructor(private _changeDetector:ChangeDetectorRef)
  {
  }  
  invalidateVisuals()
  {
    this._changeDetector.detectChanges();
  }
}


renderComponent(HelloWorld as ComponentType<HelloWorld>);
