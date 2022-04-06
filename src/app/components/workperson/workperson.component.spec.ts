import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpersonComponent } from './workperson.component';

describe('WorkpersonComponent', () => {
  let component: WorkpersonComponent;
  let fixture: ComponentFixture<WorkpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
