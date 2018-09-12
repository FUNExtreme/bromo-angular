import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BromoFormsModule } from './forms/bromo-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BromoFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
