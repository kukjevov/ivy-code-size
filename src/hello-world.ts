import {Component, ChangeDetectionStrategy, ViewContainerRef, ComponentFactoryResolver} from '@angular/core'


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

    let {Lazy2Component} = await import('./lazy2.component');
    let factory2 = this._componentFactoryResolver.resolveComponentFactory(Lazy2Component);
    this._viewContainer.createComponent(factory2);

    let {SelectComponent} = await import('./sel/select.component');
    let factoryselect = this._componentFactoryResolver.resolveComponentFactory(SelectComponent);
    this._viewContainer.createComponent(factoryselect);
  }
}