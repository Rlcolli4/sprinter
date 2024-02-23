import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardComponent } from './info-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoCardType } from 'src/app/models/navigation/info-card-info.model';
import { Router } from '@angular/router';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCardComponent],
      imports: [
        BrowserModule,
        RouterTestingModule,
        MatCardModule
      ],
      providers: [provideAnimationsAsync()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("DOM Tests", () => {
    it("should have the mat card with empty title and subtitle", () => {
      const element: HTMLElement = fixture.nativeElement;
      const card = element.querySelector("mat-card");
      const title = element.querySelector(".l--large");
      const subtitle = element.querySelector(".l--medium");
      expect(card).not.toBeNull();
      expect(card).not.toBeUndefined();
      expect(title).not.toBeNull();
      expect(title).not.toBeUndefined();
      expect(title?.textContent).toEqual("");
      expect(subtitle).not.toBeNull();
      expect(subtitle).not.toBeUndefined();
      expect(subtitle?.textContent).toEqual("");
    });
    it("should have the mat card with a set title and subtitle", () => {
      component.info = {
        id: 1,
        title: "Word Up",
        subtitle: "Korn",
        type: InfoCardType.PROJECTS
      };
      fixture.detectChanges();

      const element: HTMLElement = fixture.nativeElement;
      const card = element.querySelector("mat-card");
      const title = element.querySelector(".l--large");
      const subtitle = element.querySelector(".l--medium");
      expect(card).not.toBeNull();
      expect(card).not.toBeUndefined();
      expect(title).not.toBeNull();
      expect(title).not.toBeUndefined();
      expect(title?.textContent).toEqual("Word Up");
      expect(subtitle).not.toBeNull();
      expect(subtitle).not.toBeUndefined();
      expect(subtitle?.textContent).toEqual("Korn");
    });
  });

  describe("Typescript Tests", () => {
    describe("onCardClick", () => {
      it("should not call the router because the info is not set", () => {
        spyOn(router, "navigateByUrl");
        component.onCardClick();
        expect(router.navigateByUrl).not.toHaveBeenCalled();
      });
      it("should call the router because the info is set", () => {
        spyOn(router, "navigateByUrl");
        component.info = {
          id: 1,
          title: "Word Up",
          subtitle: "Korn",
          type: InfoCardType.PROJECTS
        };
        fixture.detectChanges();
        component.onCardClick();
        expect(router.navigateByUrl).toHaveBeenCalledWith("projects/1");
      });
    });
  });
});
