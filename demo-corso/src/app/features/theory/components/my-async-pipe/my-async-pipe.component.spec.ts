import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAsyncPipeComponent } from './my-async-pipe.component';

describe('MyAsyncPipeComponent', () => {
  let component: MyAsyncPipeComponent;
  let fixture: ComponentFixture<MyAsyncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAsyncPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
