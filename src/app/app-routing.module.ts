import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TodoInputComponent } from './todo-input/todo-input.component';

const routes: Routes = [
 {
   path:"Input", component: TodoInputComponent 
 },
 {
   path: "Tasks", component: TasksComponent
 },
 {
   path: "",  redirectTo: 'Tasks', pathMatch: 'full' 
 }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
