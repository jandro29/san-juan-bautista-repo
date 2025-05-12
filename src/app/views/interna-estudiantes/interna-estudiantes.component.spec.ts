import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaEstudiantesComponent } from './interna-estudiantes.component';

describe('InternaEstudiantesComponent', () => {
  let component: InternaEstudiantesComponent;
  let fixture: ComponentFixture<InternaEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternaEstudiantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
