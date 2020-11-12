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
import { AddStudentComponent } from './add-student.component';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

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
      declarations: [ AddStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Se debe poder crear el componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
