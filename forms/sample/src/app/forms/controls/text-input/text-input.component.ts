import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'bromo-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TextInputComponent,
        multi: true
    }]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {

    @ViewChild(DefaultValueAccessor) inputValueAccessor: DefaultValueAccessor;

    @Input() type: 'text' | 'password';
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() readonly: boolean;
    @Input() placeholder: boolean;

    private onChangeFn: () => void;
    private onTouchedFn: () => void;

    ngOnInit() {
        this.inputValueAccessor.registerOnChange(this.onChangeFn);
        this.inputValueAccessor.registerOnTouched(this.onTouchedFn);
    }

    registerOnChange(fn: () => void): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.onTouchedFn = fn;
    }

    writeValue(value: any): void {
        this.inputValueAccessor.writeValue(value);
    }

    setDisabledState(isDisabled: boolean): void {
        this.inputValueAccessor.setDisabledState(isDisabled);
    }
}
