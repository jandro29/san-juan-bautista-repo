import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioControlPagosComponent } from './inicio-control-pagos.component';

describe('InicioControlPagosComponent', () => {
  let component: InicioControlPagosComponent;
  let fixture: ComponentFixture<InicioControlPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioControlPagosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioControlPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
