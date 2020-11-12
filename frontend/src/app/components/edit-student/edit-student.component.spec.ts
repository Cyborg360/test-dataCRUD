import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatRadioModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatIconModule,
  MatSelectModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditStudentComponent } from './edit-student.component';

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
        HttpClientModule,
        MatRadioModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatCardModule,
        MatChipsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatFormFieldModule ],
      declarations: [ EditStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
