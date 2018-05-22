import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import { RbMatTableComponent } from './rb-mat-table/rb-mat-table.component';
import {ComponentsModule} from '../components.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RbMatFilterComponent } from './rb-mat-filter/rb-mat-filter.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    ComponentsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule

  ],
  declarations: [RbMatTableComponent, RbMatFilterComponent],
  exports: [RbMatTableComponent,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
    ]
})
export class RbMaterialModule { }
