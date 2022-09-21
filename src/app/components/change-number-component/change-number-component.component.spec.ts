import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumberComponentComponent } from './change-number-component.component';

describe('ChangeNumberComponentComponent', () => {
  let component: ChangeNumberComponentComponent;
  let fixture: ComponentFixture<ChangeNumberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNumberComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
