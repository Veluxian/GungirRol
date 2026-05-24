import { TestBed } from '@angular/core/testing';

import { HistoriasService } from './historias';

describe('Historias', () => {
  let service: HistoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
