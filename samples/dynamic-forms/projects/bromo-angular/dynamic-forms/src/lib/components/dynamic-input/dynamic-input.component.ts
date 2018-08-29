import { Component, OnInit, Input } from '@angular/core';
import { DynamicFormFieldInputConfig } from '../../config/inputs/DynamicFormFieldInputConfig';

@Component({
  selector: 'bromo-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {

    @Input() config: DynamicFormFieldInputConfig;
}
