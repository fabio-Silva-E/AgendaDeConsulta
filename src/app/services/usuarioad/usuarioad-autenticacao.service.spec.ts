import { TestBed } from '@angular/core/testing';

import { UsuarioadAutenticacaoService } from './usuarioad-autenticacao.service';

describe('UsuarioadAutenticacaoService', () => {
  let service: UsuarioadAutenticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioadAutenticacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
