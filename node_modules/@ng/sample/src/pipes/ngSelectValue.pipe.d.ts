import { PipeTransform } from '@angular/core';
/**
 * Pipe to transform ng select selected option into
 */
export declare class NgSelectValuePipe implements PipeTransform {
    /**
     * Transforms selected option into string
     */
    transform(): string;
}
