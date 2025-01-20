import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartComponent } from './pie-chart.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
