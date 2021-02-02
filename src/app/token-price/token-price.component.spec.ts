import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenPriceComponent } from './token-price.component';

describe('TokenPriceComponent', () => {
  let component: TokenPriceComponent;
  let fixture: ComponentFixture<TokenPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
