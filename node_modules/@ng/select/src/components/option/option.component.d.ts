import { NgSelectOption } from "./option.interface";
/**
 * Component used for options in select component
 */
export declare class OptionComponent<TValue> implements NgSelectOption<TValue> {
    /**
     * Indication whether is item active
     */
    active: boolean;
    /**
     * Indication whether this option is selected
     */
    selected: boolean;
    /**
     * Value that will be used if this option will be selected
     */
    value: TValue;
    /**
     * Text that is displayed if this value is selected
     */
    text: string;
    /**
     * If specified this option will be displayed in group
     */
    group: string;
}
