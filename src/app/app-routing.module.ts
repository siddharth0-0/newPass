import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassGenComponent } from './pass-gen/pass-gen.component';

const routes: Routes = [
  { path: '', redirectTo: 'generate', pathMatch: 'full' },
  { path: 'generate', component: PassGenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
