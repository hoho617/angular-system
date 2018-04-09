import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialManageComponent } from './serial-manage.component';

describe('SerialManageComponent', () => {
  let component: SerialManageComponent;
  let fixture: ComponentFixture<SerialManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
