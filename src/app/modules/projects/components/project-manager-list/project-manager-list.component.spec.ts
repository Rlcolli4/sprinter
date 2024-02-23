import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerListComponent } from './project-manager-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { InfoCardType } from 'src/app/models/navigation/info-card-info.model';

describe('ProjectManagerListComponent', () => {
  let component: ProjectManagerListComponent;
  let fixture: ComponentFixture<ProjectManagerListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectManagerListComponent],
      imports: [
        BrowserModule,
        MatListModule,
        MatDividerModule,
        RouterTestingModule
      ],
      providers: [provideAnimationsAsync()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("DOM Tests", () => {
    it("should not have a divder or list item, no items in list", () => {
      component.projectInfo = [
        {
          id: 1,
          title: "Sands of Time",
          subtitle: "Started Jan 19, 2024",
          type: InfoCardType.PROJECTS
        },
        {
          id: 2,
          title: "Hyrule Champion",
          subtitle: "Completed Dev 1, 2023",
          type: InfoCardType.PROJECTS
        },
        {
          id: 3,
          title: "Shadows of the Erd Tree",
          subtitle: "TBD",
          type: InfoCardType.PROJECTS
        },
        {
          id: 4,
          title: "Fatality / Friendship",
          subtitle: "TBD",
          type: InfoCardType.PROJECTS
        }
      ];
      fixture.detectChanges();
      const element: HTMLElement = fixture.nativeElement;
      const matListItems = element.querySelectorAll("mat-list-item");
      const titles = element.querySelectorAll(".th--bold");
      const subtitles = element.querySelectorAll(".th--italics");
      expect(matListItems.length).toEqual(4);
      expect(titles.length).toEqual(4);
      expect(subtitles.length).toEqual(4);
      expect(titles[0].textContent).toEqual(" Sands of Time ");
      expect(subtitles[0].textContent).toEqual(" Started Jan 19, 2024 ");
      expect(titles[1].textContent).toEqual(" Hyrule Champion ");
      expect(subtitles[1].textContent).toEqual(" Completed Dev 1, 2023 ");
      expect(titles[2].textContent).toEqual(" Shadows of the Erd Tree ");
      expect(subtitles[2].textContent).toEqual(" TBD ");
      expect(titles[3].textContent).toEqual(" Fatality / Friendship ");
      expect(subtitles[3].textContent).toEqual(" TBD ");
    });

    it("should not have a divder or list item, no items in list", () => {
      const element: HTMLElement = fixture.nativeElement;
      const matListItems = element.querySelectorAll("mat-list-item");
      const titles = element.querySelectorAll(".th--bold");
      const subtitles = element.querySelectorAll(".th--italics");
      expect(matListItems.length).toEqual(0);
      expect(titles.length).toEqual(0);
      expect(subtitles.length).toEqual(0);
    });
  });

  describe("Typescript Tests", () => {
    it("should call the router navigation in onListItemClick", () => {
      spyOn(router, "navigateByUrl");
      component.onListItemClick(1);
      expect(router.navigateByUrl).toHaveBeenCalledWith("projects/1");
    });
  });
});
