import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemSemAcessoComponent } from './mensagem-sem-acesso.component';

describe('MensagemSemAcessoComponent', () => {
  let component: MensagemSemAcessoComponent;
  let fixture: ComponentFixture<MensagemSemAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemSemAcessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemSemAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
