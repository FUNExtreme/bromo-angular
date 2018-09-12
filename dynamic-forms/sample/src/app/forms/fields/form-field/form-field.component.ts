import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'bromo-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

    @Input() label: string | null;
    @Input() errors: ValidationErrors | null;
}
