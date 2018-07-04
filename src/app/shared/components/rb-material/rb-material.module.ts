import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import { RbMatTableComponent } from './rb-mat-table/rb-mat-table.component';
import {ComponentsModule} from '../components.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RbMatFilterComponent } from './rb-mat-filter/rb-mat-filter.component';
import { RbMatDropDownComponent } from './rb-mat-drop-down/rb-mat-drop-down.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    ComponentsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule

  ],
  declarations: [RbMatTableComponent, RbMatFilterComponent, RbMatDropDownComponent],
  exports: [
    RbMatTableComponent,
    RbMatFilterComponent,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    RbMatDropDownComponent,
    MatAutocompleteModule
    ]
})
export class RbMaterialModule { }
