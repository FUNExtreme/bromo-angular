import { DynamicFormFieldType } from '../fields/DynamicFormFieldType';

export interface IDynamicFormFieldInputConfig<TConfig = any> {
    type: DynamicFormFieldType;

    label: string;
    name: string;
    tooltip: string;
    config: TConfig;
}

export abstract class DynamicFormFieldInputConfig<TConfig = any> implements IDynamicFormFieldInputConfig<TConfig> {
    public abstract type: DynamicFormFieldType;

    public tooltip: string;
    public config: TConfig;

    constructor(
        public name: string,
        public label: string
    ) { }

    setTooltip = (tooltip: string) => {
        this.tooltip = tooltip;
    }

    setConfig = (config: TConfig) => {
        this.config = config;
    }
}
