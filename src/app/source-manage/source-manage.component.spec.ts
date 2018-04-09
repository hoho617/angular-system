import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceManageComponent } from './source-manage.component';

describe('SourceManageComponent', () => {
  let component: SourceManageComponent;
  let fixture: ComponentFixture<SourceManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
