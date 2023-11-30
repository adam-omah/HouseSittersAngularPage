import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePostListComponent } from './house-post-list.component';

describe('HousePostListComponent', () => {
  let component: HousePostListComponent;
  let fixture: ComponentFixture<HousePostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousePostListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
