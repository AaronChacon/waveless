import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconService } from '../../../../core/services/icon.service';
import { IconName } from './icon.interface';

@Component({
  standalone: true,
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  imports: [CommonModule],
  providers: [IconService],
})
export class IconComponent implements OnInit, OnChanges {
  private iconService = inject(IconService);
  private sanitizer = inject(DomSanitizer);

  @Input() size = 24;
  @Input() color = '';
  @Input() name: IconName = 'calendar';

  colorClass = '';
  svgContent: SafeHtml = '';

  loading = false;
  errorLoading = false;

  ngOnInit() {
    this.loadIcon();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && !changes['name'].firstChange) {
      this.loadIcon();
    }
  }

  private loadIcon(): void {
    if (!this.name) return;

    this.iconService
      .getIconContent(this.name)
      .subscribe({
        next: (svg) => {
          const updatedSvg = svg.replace(/fill="#\w+"/g, 'fill="currentColor"');
          this.svgContent = this.sanitizer.bypassSecurityTrustHtml(updatedSvg);
        },
      });
  }



}
