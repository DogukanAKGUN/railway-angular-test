import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksComponent } from './snacks.component';

describe('SnacksComponent', () => {
  let component: SnacksComponent;
  let fixture: ComponentFixture<SnacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnacksComponent]
    });
    fixture = TestBed.createComponent(SnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
