import { FooterComponent } from '../../components/ui-waveless/organisms/footer/footer.component';
import { NavbarComponent } from '../../components/ui-waveless/organisms/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';
import { MainComponent } from './components/main/main.component';

export const HomePageImports = [
  HttpClientModule,
  NavbarComponent,
  HeroComponent,
  MainComponent,
  FooterComponent,
];
