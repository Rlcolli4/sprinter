import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsManagerComponent } from './projects-manager.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MockComponent } from 'ng-mocks';
import { ProjectManagerCardsComponent, ProjectManagerListComponent } from '../../components';
import { MatIconModule } from '@angular/material/icon';

describe('ProjectsManagerComponent', () => {
  let component: ProjectsManagerComponent;
  let fixture: ComponentFixture<ProjectsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectsManagerComponent,
        MockComponent(ProjectManagerCardsComponent),
        MockComponent(ProjectManagerListComponent)
      ],
      imports: [
        BrowserModule,
        SharedModule,
        MatButtonToggleModule,
        MatIconModule
      ],
      providers: [provideAnimationsAsync()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("DOM Tests", () => {
    it("should have the mat button toggle with the CARD option selected, app-project-manager-cards should be visible", () => {
      component.type = "CARD";
      fixture.detectChanges();
      const element: HTMLElement = fixture.nativeElement;
      const toggleItems = element.querySelectorAll("mat-button-toggle");
      const cardComp = element.querySelector("app-project-manager-cards");
      const listComp = element.querySelector("app-project-manager-list");
      expect(toggleItems.length).toEqual(2);
      expect(toggleItems[0].classList.contains("mat-button-toggle-checked")).toBeTrue();
      expect(toggleItems[1].classList.contains("mat-button-toggle-checked")).toBeFalse();
      expect(cardComp).not.toBeNull();
      expect(cardComp).not.toBeUndefined();
      expect(listComp).toBeNull();
    });

    it("should have the mat button toggle with the LIST option selected, app-project-manager-list should be visible", () => {
      component.type = "LIST";
      fixture.detectChanges();
      const element: HTMLElement = fixture.nativeElement;
      const toggleItems = element.querySelectorAll("mat-button-toggle");
      const cardComp = element.querySelector("app-project-manager-cards");
      const listComp = element.querySelector("app-project-manager-list");
      expect(toggleItems.length).toEqual(2);
      expect(toggleItems[0].classList.contains("mat-button-toggle-checked")).toBeFalse();
      expect(toggleItems[1].classList.contains("mat-button-toggle-checked")).toBeTrue();
      expect(listComp).not.toBeNull();
      expect(listComp).not.toBeUndefined();
      expect(cardComp).toBeNull();
    });
  });
});
