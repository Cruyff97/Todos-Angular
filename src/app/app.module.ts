import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TasksComponent } from './tasks/tasks.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { CompletedComponent } from './completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TodoInputComponent,
    TasksComponent,
    CompletedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
