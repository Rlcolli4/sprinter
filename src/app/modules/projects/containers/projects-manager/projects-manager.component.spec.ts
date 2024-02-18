import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsManagerComponent } from './projects-manager.component';

describe('ProjectsManagerComponent', () => {
  let component: ProjectsManagerComponent;
  let fixture: ComponentFixture<ProjectsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
