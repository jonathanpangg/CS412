import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedFormComponent } from './validated-form.component';

describe('ValidatedFormComponent', () => {
  let component: ValidatedFormComponent;
  let fixture: ComponentFixture<ValidatedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
