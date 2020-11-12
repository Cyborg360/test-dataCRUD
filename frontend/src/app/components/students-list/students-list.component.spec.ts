import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatDividerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentsListComponent } from './students-list.component';

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule,
        MatDividerModule,
        MatPaginatorModule,
        MatTableModule,
        MatButtonModule
      ],
      declarations: [ StudentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
