import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFileToSuccessComponent } from './sub-file-to-success.component';

describe('SubFileToSuccessComponent', () => {
  let component: SubFileToSuccessComponent;
  let fixture: ComponentFixture<SubFileToSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFileToSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFileToSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
