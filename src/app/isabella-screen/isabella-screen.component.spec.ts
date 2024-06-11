import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsabellaScreenComponent } from './isabella-screen.component';

describe('IsabellaScreenComponent', () => {
  let component: IsabellaScreenComponent;
  let fixture: ComponentFixture<IsabellaScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsabellaScreenComponent]
    });
    fixture = TestBed.createComponent(IsabellaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
