import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorinthiansComponent } from './corinthians.component';

describe('CorinthiansComponent', () => {
  let component: CorinthiansComponent;
  let fixture: ComponentFixture<CorinthiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorinthiansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorinthiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
