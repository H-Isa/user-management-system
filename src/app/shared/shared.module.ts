import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LayoutComponent } from '../layout/layout.component';
import { CreateUserModalComponent } from './dialogs/create-user-modal/create-user-modal.component';
import { MaterialModule } from './angular-material/material-modules';
import { DeleteUserModalComponent } from './dialogs/delete-user-modal/delete-user-modal.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';


@NgModule({
  declarations: [
    NavbarComponent,
    PieChartComponent,
    LayoutComponent,
    CreateUserModalComponent,
    DeleteUserModalComponent,
    EmptyStateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CanvasJSAngularChartsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    NavbarComponent,
    PieChartComponent,
    EmptyStateComponent,
  ]
})
export class SharedModule { }
