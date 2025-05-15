import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoMatriculasComponent } from './pago-matriculas.component';

describe('PagoMatriculasComponent', () => {
  let component: PagoMatriculasComponent;
  let fixture: ComponentFixture<PagoMatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoMatriculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
