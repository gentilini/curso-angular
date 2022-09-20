import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfRenderComponentComponent } from './if-render-component.component';

describe('IfRenderComponentComponent', () => {
  let component: IfRenderComponentComponent;
  let fixture: ComponentFixture<IfRenderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfRenderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfRenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
