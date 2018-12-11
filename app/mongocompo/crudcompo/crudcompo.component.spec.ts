import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcompoComponent } from './crudcompo.component';

describe('CrudcompoComponent', () => {
  let component: CrudcompoComponent;
  let fixture: ComponentFixture<CrudcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
