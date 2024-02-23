import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerCardsComponent } from './project-manager-cards.component';

describe('ProjectManagerCardsComponent', () => {
  let component: ProjectManagerCardsComponent;
  let fixture: ComponentFixture<ProjectManagerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagerCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectManagerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
