import {
  Component,
  ɵrenderComponent as renderComponent,
  ɵComponentType as ComponentType,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewContainerRef,
  ɵRender3ComponentFactory as Render3ComponentFactory
} from '@angular/core'
import {LazyComponent} from './lazy.component';


@Component({
  selector: 'hello-world',
  template: `
    <div *ngIf="cond">toto je div</div>
    <button (click)="cond = !cond;invalidateVisuals();">click</button>
    <h3>Hello {{name}}</h3>
    <button (click)="loadComponent()">load</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWorld {
  name = 'World!'
  cond: boolean = true;
  constructor(private _changeDetector:ChangeDetectorRef,
              private _viewContainer: ViewContainerRef)
  {
  }  
  invalidateVisuals()
  {
    this._changeDetector.detectChanges();
  }

  async loadComponent()
  {
    let {LazyComponent} = await import('./lazy.component');
    let lazyComp = LazyComponent as ComponentType<LazyComponent>;
    let factory = new Render3ComponentFactory(lazyComp.ngComponentDef);
    this._viewContainer.createComponent(factory);
  }
}


renderComponent(HelloWorld as ComponentType<HelloWorld>, {});
