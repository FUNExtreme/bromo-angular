import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormControlErrorComponent } from './controls/form-control-error/form-control-error.component';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { NumberInputComponent } from './controls/number-input/number-input.component';
import { FormFieldComponent } from './fields/form-field/form-field.component';
import { FormFieldErrorsComponent } from './fields/form-field-errors/form-field-errors.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        TextInputComponent,
        FormControlErrorComponent,
        NumberInputComponent,
        FormFieldComponent,
        FormFieldErrorsComponent
    ],
    exports: [
        TextInputComponent,
        FormControlErrorComponent
    ]
})
export class BromoFormsModule { }
