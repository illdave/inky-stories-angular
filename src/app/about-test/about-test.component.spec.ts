import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTestComponent } from './about-test.component';

describe('AboutTestComponent', () => {
  let component: AboutTestComponent;
  let fixture: ComponentFixture<AboutTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
