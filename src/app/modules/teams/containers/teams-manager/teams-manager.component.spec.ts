import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsManagerComponent } from './teams-manager.component';

describe('TeamsManagerComponent', () => {
  let component: TeamsManagerComponent;
  let fixture: ComponentFixture<TeamsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
