import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCreateComponent } from './cadastro-create.component';

describe('CadastroCreateComponent', () => {
  let component: CadastroCreateComponent;
  let fixture: ComponentFixture<CadastroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
