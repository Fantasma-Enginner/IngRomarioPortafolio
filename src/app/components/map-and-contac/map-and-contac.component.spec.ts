import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAndContacComponent } from './map-and-contac.component';

describe('MapAndContacComponent', () => {
  let component: MapAndContacComponent;
  let fixture: ComponentFixture<MapAndContacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAndContacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAndContacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
