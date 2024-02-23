import { HomeComponent } from "./home/home.component";
import { InfoCardComponent } from "../shared/components/info-card/info-card.component";
import { LoginComponent } from "./login/login.component";

export const standalones = [
  LoginComponent,
  HomeComponent,
  InfoCardComponent
];

export * from "./home/home.component";
export * from "./login/login.component";
export * from "../shared/components/info-card/info-card.component";