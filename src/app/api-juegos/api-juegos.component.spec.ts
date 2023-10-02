import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiJuegosComponent } from './api-juegos.component';

describe('ApiJuegosComponent', () => {
  let component: ApiJuegosComponent;
  let fixture: ComponentFixture<ApiJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiJuegosComponent]
    });
    fixture = TestBed.createComponent(ApiJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
