import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeDetalleComponent } from './personaje-detalle.component';

describe('PersonajeDetalleComponent', () => {
  let component: PersonajeDetalleComponent;
  let fixture: ComponentFixture<PersonajeDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
