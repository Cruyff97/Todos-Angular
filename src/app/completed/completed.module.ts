import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedComponent } from './completed.component';
import { MaterialModule } from '../modules/material/material.module';
import { CompletedRoutingModule } from './completed-routing.module';

@NgModule({
  declarations: [CompletedComponent],
  imports: [CommonModule, MaterialModule, CompletedRoutingModule],
})
export class CompletedModule {}
