import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { SelectbootstrapComponent } from './selectbootstrap.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    FormsModule,
    
  ],
  declarations: [SelectbootstrapComponent],
  exports: [SelectbootstrapComponent ]
  
})
export class SelectbootstrapModule { }
