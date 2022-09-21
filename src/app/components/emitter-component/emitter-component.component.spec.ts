import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterComponentComponent } from './emitter-component.component';

describe('EmitterComponentComponent', () => {
  let component: EmitterComponentComponent;
  let fixture: ComponentFixture<EmitterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
