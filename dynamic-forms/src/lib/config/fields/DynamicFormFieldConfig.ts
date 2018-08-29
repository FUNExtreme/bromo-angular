import { DynamicFormFieldInputConfig, IDynamicFormFieldInputConfig } from '../inputs/DynamicFormFieldInputConfig';
import { DynamicFormFieldType } from './DynamicFormFieldType';

export interface IDynamicFormFieldInitialState {
    isDisabled: boolean;
    isHidden: boolean;
    isReadonly: boolean;
}

export interface IDynamicFormFieldPosition {
    row: number;
    columnSpan: number;
    columnOffset: number;
}

export class DynamicFormFieldConfig implements IDynamicFormFieldInputConfig, IDynamicFormFieldPosition, IDynamicFormFieldInitialState {
    // Input Config
    type = DynamicFormFieldType.Text;
    label = '';
    name = '';
    tooltip = '';
    config = {};
    // Position
    row;
    columnSpan = 4;
    columnOffset = 0;
    // State
    isDisabled = false;
    isHidden = false;
    isReadonly = false;

    constructor(
        inputConfig: DynamicFormFieldInputConfig
    ) {
        Object.assign(this, inputConfig);
    }

    setInputType = (type: DynamicFormFieldType) => {
        this.type = type;
        return this;
    }

    setLabel = (label: string) => {
        this.label = label;
        return this;
    }

    setName = (name: string) => {
        this.name = name;
        return this;
    }

    setTooltip = (tooltip: string) => {
        this.tooltip = tooltip;
        return this;
    }

    setConfig = (config: any) => {
        this.config = config;
        return this;
    }

    setRow = (row: number) => {
        this.row = row;
        return this;
    }

    setColumnSpan = (columnSpan: number) => {
        this.columnSpan = columnSpan;
        return this;
    }

    setColumnOffset = (columnOffset: number) => {
        this.columnOffset = columnOffset;
        return this;
    }

    setDisabled = (isDisabled = true) => {
        this.isDisabled = isDisabled;
        return this;
    }

    setHidden = (isHidden = true) => {
        this.isHidden = isHidden;
        return this;
    }

    setReadonly = (isReadonly = true) => {
        this.isReadonly = isReadonly;
        return this;
    }
}
