import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerCardsComponent } from './project-manager-cards.component';
import { MockComponent } from 'ng-mocks';
import { InfoCardComponent } from 'src/app/shared/components';
import { InfoCardType } from 'src/app/models/navigation/info-card-info.model';

describe('ProjectManagerCardsComponent', () => {
  let component: ProjectManagerCardsComponent;
  let fixture: ComponentFixture<ProjectManagerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectManagerCardsComponent, MockComponent(InfoCardComponent)],
      imports: [],
      providers: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("DOM Tests", () => {
    it("should have 4 cards", () => {
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
      const matListItems = element.querySelectorAll("app-info-card");
      expect(matListItems.length).toEqual(4);
    });
    it("should not have any cards when no items set", () => {
      const element: HTMLElement = fixture.nativeElement;
      const matListItems = element.querySelectorAll("app-info-card");
      expect(matListItems.length).toEqual(0);
    });
  });
});
