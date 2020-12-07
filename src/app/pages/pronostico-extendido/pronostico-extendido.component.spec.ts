import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticoExtendidoComponent } from './pronostico-extendido.component';

describe('PronosticoExtendidoComponent', () => {
  let component: PronosticoExtendidoComponent;
  let fixture: ComponentFixture<PronosticoExtendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronosticoExtendidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronosticoExtendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
