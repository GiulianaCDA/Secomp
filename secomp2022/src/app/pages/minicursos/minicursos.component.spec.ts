import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicursosComponent } from './minicursos.component';

describe('MinicursosComponent', () => {
  let component: MinicursosComponent;
  let fixture: ComponentFixture<MinicursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinicursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinicursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
