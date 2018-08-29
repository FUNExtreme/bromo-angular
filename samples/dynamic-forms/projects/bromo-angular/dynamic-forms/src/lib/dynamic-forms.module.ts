import { NgModule } from '@angular/core';
import { BromoFormsModule } from '@bromo-angular/forms';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
      BrowserModule,
      BromoFormsModule
  ],
  declarations: [DynamicInputComponent, DynamicFormComponent],
  exports: []
})
export class BromoDynamicFormsModule { }
