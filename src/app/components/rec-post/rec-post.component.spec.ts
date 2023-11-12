import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPostComponent } from './rec-post.component';

describe('RecPostComponent', () => {
  let component: RecPostComponent;
  let fixture: ComponentFixture<RecPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecPostComponent]
    });
    fixture = TestBed.createComponent(RecPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
