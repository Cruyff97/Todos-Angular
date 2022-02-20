import { CompletedComponent } from './completed/completed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TodoInputComponent } from './todo-input/todo-input.component';

const routes: Routes = [
 {
   path:"input", component: TodoInputComponent 
 },
 {
   path: "tasks", component: TasksComponent
 },
 {
   path:"completed", component: CompletedComponent
 },
 {
   path: "",  redirectTo: 'tasks', pathMatch: 'full' 
 }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
