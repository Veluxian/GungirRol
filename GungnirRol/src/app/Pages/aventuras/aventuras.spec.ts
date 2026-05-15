import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aventuras } from './aventuras';

describe('Aventuras', () => {
  let component: Aventuras;
  let fixture: ComponentFixture<Aventuras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aventuras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aventuras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
