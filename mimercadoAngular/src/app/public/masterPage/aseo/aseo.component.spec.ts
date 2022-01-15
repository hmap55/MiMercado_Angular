import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseoComponent } from './aseo.component';

describe('AseoComponent', () => {
  let component: AseoComponent;
  let fixture: ComponentFixture<AseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
