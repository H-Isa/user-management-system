import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementComponent } from './user-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementComponent], 
      imports:[FormsModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
