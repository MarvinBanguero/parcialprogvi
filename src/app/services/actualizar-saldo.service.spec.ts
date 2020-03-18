import { TestBed } from '@angular/core/testing';

import { ActualizarSaldoService } from './actualizar-saldo.service';

describe('ActualizarSaldoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActualizarSaldoService = TestBed.get(ActualizarSaldoService);
    expect(service).toBeTruthy();
  });
});
