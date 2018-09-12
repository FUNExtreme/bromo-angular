import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'bromo-form-field-errors',
    templateUrl: './form-field-errors.component.html',
    styleUrls: ['./form-field-errors.component.scss']
})
export class FormFieldErrorsComponent {

    @Input() errors: ValidationErrors | null;
}
