import { EventEmitter, QueryList, AfterViewInit } from "@angular/core";
import { NgSelectOptGroup } from "./optgroup.interface";
import { NgSelectOption } from "./option.interface";
/**
 * Component used for options group in select component
 */
export declare class OptGroupComponent<TValue> implements NgSelectOptGroup<TValue>, AfterViewInit {
    /**
     * Instance of event emitter for optionsChange
     */
    private _optionsChange;
    /**
     * Options assigned to this options group
     */
    readonly options: NgSelectOption<TValue>[];
    /**
     * Occurs when options in this group change
     */
    readonly optionsChange: EventEmitter<void>;
    /**
     * Children options in this group
     * @internal
     */
    optionsChildren: QueryList<NgSelectOption<TValue>>;
    /**
     * Text that is displayed for this options group
     */
    text: string;
    /**
     * Called when view was initialized
     */
    ngAfterViewInit(): void;
}
