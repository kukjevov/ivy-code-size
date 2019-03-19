import { PipeTransform } from '@angular/core';
/**
 * Pipe to transform ng select selected option into
 */
export declare class NgSelectValuePipe<TValue> implements PipeTransform {
    /**
     * Transforms selected option into string
     */
    transform(): TValue;
}
