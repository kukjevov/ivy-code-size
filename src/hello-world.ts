import {Component, ChangeDetectionStrategy, ViewContainerRef, ComponentFactoryResolver} from '@angular/core'
import {LazyComponent} from './lazy.component';


@Component({
  selector: 'hello-world',
  template: `
    <div *ngIf="cond">toto je div</div>
    <button (click)="cond = !cond">click</button>
    <h3>Hello {{name}}</h3>
    <button (click)="loadComponent()">load</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWorld {
  name = 'World!'
  cond: boolean = true;
  constructor(private _viewContainer: ViewContainerRef,
      private _componentFactoryResolver: ComponentFactoryResolver)
  {
  }  

  async loadComponent()
  {
    let {LazyComponent} = await import('./lazy.component');
    let factory = this._componentFactoryResolver.resolveComponentFactory(LazyComponent);
    this._viewContainer.createComponent(factory);
  }
}