import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { CartComponent } from './components/cart/cart.component';

import { MaterialModule } from './../material/material.module';
import { DeleteRepeatsPipe } from './pipes/deleteRepeats/delete-repeats.pipe';
import { RepeatNumberPipe } from './pipes/repeatNumber/repeat-number.pipe';


@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    DeleteRepeatsPipe,
    RepeatNumberPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    DeleteRepeatsPipe,
    RepeatNumberPipe

  ]
})
export class SharedModule { }
