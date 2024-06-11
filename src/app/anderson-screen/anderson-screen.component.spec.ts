import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndersonScreenComponent } from './anderson-screen.component';

describe('AndersonScreenComponent', () => {
  let component: AndersonScreenComponent;
  let fixture: ComponentFixture<AndersonScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndersonScreenComponent]
    });
    fixture = TestBed.createComponent(AndersonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
