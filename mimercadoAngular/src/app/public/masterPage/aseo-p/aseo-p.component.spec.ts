import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseoPComponent } from './aseo-p.component';

describe('AseoPComponent', () => {
  let component: AseoPComponent;
  let fixture: ComponentFixture<AseoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AseoPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AseoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
