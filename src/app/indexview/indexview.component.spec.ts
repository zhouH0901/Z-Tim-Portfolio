import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexviewComponent } from './indexview.component';

describe('IndexviewComponent', () => {
  let component: IndexviewComponent;
  let fixture: ComponentFixture<IndexviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
