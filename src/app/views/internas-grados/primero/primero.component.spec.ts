import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeroComponent } from './primero.component';

describe('PrimeroComponent', () => {
  let component: PrimeroComponent;
  let fixture: ComponentFixture<PrimeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
