import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Directive({ selector: '[appDropdownTrigger]' })
export class DropdownTriggerDirective {}

@Directive({ selector: '[appDropdownContent]' })
export class DropdownContentDirective {}

@Component({
  standalone: true,
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  imports: [CommonModule, IconComponent],
})
export class DropdownComponent implements AfterViewInit {
  @Input() isOpen = false;

  @ViewChild('triggerRef') triggerEl?: ElementRef<HTMLElement>;
  @ViewChild('panelRef') panelEl?: ElementRef<HTMLElement>;
  @HostListener('document:keydown.escape') onEsc() {
    this.close();
  }
  @HostListener('window:resize') onResize() {
    if (this.isOpen) {
      this.reposition();
    }
  }

  private rafId: number | null = null;

  toggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.reposition());
      this.startFollowLoop();
    } else {
      this.stopFollowLoop();
    }
  }

  close(): void {
    this.isOpen = false;
    this.stopFollowLoop();
  }

  ngAfterViewInit(): void {
    if (this.isOpen) {
      this.startFollowLoop();
    }
  }

  private startFollowLoop(): void {
    if (this.rafId != null) {
      return;
    }
    const loop = () => {
      if (this.isOpen) {
        this.reposition();
        this.rafId = requestAnimationFrame(loop);
      }
    };
    this.rafId = requestAnimationFrame(loop);
  }

  private stopFollowLoop(): void {
    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private reposition(): void {
    if (!this.triggerEl || !this.panelEl) {
      return;
    }

    const margin = 8;
    const trig = this.triggerEl.nativeElement.getBoundingClientRect();
    const panel = this.panelEl.nativeElement;
    const pw = panel.offsetWidth;
    const ph = panel.offsetHeight;

    let left = trig.left;
    let top = trig.bottom + margin;

    /* ­— desbordamiento horizontal — */
    if (left + pw + margin > window.innerWidth) {
      left = window.innerWidth - pw - margin;
    }
    if (left < margin) {
      left = margin;
    }

    /* ­— desbordamiento vertical (drop‑up) — */
    if (top + ph > window.innerHeight - margin) {
      top = trig.top - ph - margin; // coloca arriba
    }
    if (top < margin) {
      top = margin;
    }

    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
  }
}
