import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaIndexComponent } from './consulta-index.component';

describe('ConsultaIndexComponent', () => {
  let component: ConsultaIndexComponent;
  let fixture: ComponentFixture<ConsultaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
