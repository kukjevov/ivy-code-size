import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ComponentRoute} from "@ng/common";
import {ProvideClass} from "../provider";

@Component(
{
    selector: 'lazy-route-component',
    templateUrl: 'lazyRoute.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRoute({path: ''})
export class LazyRouteComponent
{
    public cond: boolean = false;
    public arrayObj: string[] = ['prvy', 'druhy', 'treti'];

    constructor(provideClass: ProvideClass)
    {
        console.log("lazy", provideClass);
    }
}