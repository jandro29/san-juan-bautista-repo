import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoComponent } from './cuarto.component';

describe('CuartoComponent', () => {
  let component: CuartoComponent;
  let fixture: ComponentFixture<CuartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuartoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
