import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMensualidadComponent } from './crear-mensualidad.component';

describe('CrearMensualidadComponent', () => {
  let component: CrearMensualidadComponent;
  let fixture: ComponentFixture<CrearMensualidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMensualidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMensualidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
