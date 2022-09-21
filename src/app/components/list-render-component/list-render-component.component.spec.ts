import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRenderComponentComponent } from './list-render-component.component';

describe('ListRenderComponentComponent', () => {
  let component: ListRenderComponentComponent;
  let fixture: ComponentFixture<ListRenderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRenderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
