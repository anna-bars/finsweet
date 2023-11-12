import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscribeComponent } from './admin-subscribe.component';

describe('AdminSubscribeComponent', () => {
  let component: AdminSubscribeComponent;
  let fixture: ComponentFixture<AdminSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminSubscribeComponent]
    });
    fixture = TestBed.createComponent(AdminSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
