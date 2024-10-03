import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfContainerComponent } from './inf-container.component';

describe('InfContainerComponent', () => {
  let component: InfContainerComponent;
  let fixture: ComponentFixture<InfContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
