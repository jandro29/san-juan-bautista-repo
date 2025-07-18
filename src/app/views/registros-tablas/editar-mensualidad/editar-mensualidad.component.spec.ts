import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMensualidadComponent } from './editar-mensualidad.component';

describe('EditarMensualidadComponent', () => {
  let component: EditarMensualidadComponent;
  let fixture: ComponentFixture<EditarMensualidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMensualidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMensualidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
