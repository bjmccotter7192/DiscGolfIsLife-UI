import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDiscComponent } from './my-disc.component';

describe('MyDiscComponent', () => {
  let component: MyDiscComponent;
  let fixture: ComponentFixture<MyDiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
