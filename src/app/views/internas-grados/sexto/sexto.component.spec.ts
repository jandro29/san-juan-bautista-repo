import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoComponent } from './sexto.component';

describe('SextoComponent', () => {
  let component: SextoComponent;
  let fixture: ComponentFixture<SextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SextoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
