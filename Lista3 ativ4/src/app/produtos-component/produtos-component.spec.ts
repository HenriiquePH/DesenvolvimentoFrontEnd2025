import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCOmponent } from './produtos-component';

describe('ProdutosCOmponent', () => {
  let component: ProdutosCOmponent;
  let fixture: ComponentFixture<ProdutosCOmponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosCOmponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosCOmponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
