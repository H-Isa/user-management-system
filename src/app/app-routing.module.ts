import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {  
    path: '', 
    component: LayoutComponent, 
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      {
        path: 'user-management',
        loadChildren: () => import('./pages/user-management/user-management.module').then(m => m.UserManagementModule)
      }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
