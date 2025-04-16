import { FooterComponent } from '../../components/ui-waveless/organisms/footer/footer.component';
import { NavbarComponent } from '../../components/ui-waveless/organisms/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';

export const HomePageImports = [NavbarComponent, FooterComponent, HttpClientModule, HeroComponent];
