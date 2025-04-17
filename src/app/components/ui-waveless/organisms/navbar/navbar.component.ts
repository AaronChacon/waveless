import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { NavbarActionsEnum } from './enum/navbar.enum';
import { TabComponent } from '../../molecules/tab/tab.component';
import { IconName } from '../../atoms/icon/icon.type';
import { ButtonComponent } from '../../atoms/button/button.component';

interface NavbarItem {
  text: string;
  route: string;
  iconSize: number;
  iconColor: string;
  iconName: IconName | null;
}

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [CommonModule, TabComponent, IconComponent, ButtonComponent],
})
export class NavbarComponent {
  isSidebarOpen = false;

  navbarItems: NavbarItem[] = [
    {
      route: '/',
      iconName: 'mountains',
      iconSize: 24,
      iconColor: 'color-basic-800',
      text: 'Aventura',
    },
    {
      route: '/destinations',
      iconName: 'world',
      iconSize: 24,
      iconColor: 'color-basic-800',
      text: 'Destinos',
    },
    {
      route: '/hosting',
      iconName: 'home',
      iconSize: 24,
      iconColor: 'color-basic-800',
      text: 'Alojamiento',
    },
    {
      route: '/about',
      iconName: null,
      iconSize: 0,
      iconColor: '',
      text: 'Sobre nosotros',
    },
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === NavbarActionsEnum.ESCAPE) {
      this.isSidebarOpen = false;
    }
    if (event.key === NavbarActionsEnum.ENTER) {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }

  isActiveTab(route: string): boolean {
    return window.location.pathname === route;
  }
}
