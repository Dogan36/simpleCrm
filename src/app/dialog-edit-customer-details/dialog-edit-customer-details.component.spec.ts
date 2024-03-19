import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCustomerDetailsComponent } from './dialog-edit-customer-details.component';

describe('DialogEditCustomerDetailsComponent', () => {
  let component: DialogEditCustomerDetailsComponent;
  let fixture: ComponentFixture<DialogEditCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditCustomerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
