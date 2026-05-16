import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juega } from './juega';

describe('Juega', () => {
  let component: Juega;
  let fixture: ComponentFixture<Juega>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Juega]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juega);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
