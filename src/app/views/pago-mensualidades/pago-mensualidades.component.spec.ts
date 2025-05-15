import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoMensualidadesComponent } from './pago-mensualidades.component';

describe('PagoMensualidadesComponent', () => {
  let component: PagoMensualidadesComponent;
  let fixture: ComponentFixture<PagoMensualidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoMensualidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoMensualidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
