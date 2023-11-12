import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBlockComponent } from './post-block.component';

describe('PostBlockComponent', () => {
  let component: PostBlockComponent;
  let fixture: ComponentFixture<PostBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostBlockComponent]
    });
    fixture = TestBed.createComponent(PostBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
