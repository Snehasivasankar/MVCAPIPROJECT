import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDbComponent } from './insert-db.component';

describe('InsertDbComponent', () => {
  let component: InsertDbComponent;
  let fixture: ComponentFixture<InsertDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertDbComponent]
    });
    fixture = TestBed.createComponent(InsertDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
