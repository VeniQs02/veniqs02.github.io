import {Component, HostListener} from '@angular/core';
import {ShowcaseScreen} from '../showcase-screen/showcase-screen';
import {NgClass} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'showcase-overlay',
  imports: [
    ShowcaseScreen,
    NgClass,
    TranslatePipe
  ],
  templateUrl: './showcase-overlay.html',
  styleUrl: './showcase-overlay.css',
})
export class ShowcaseOverlay {
  isOverlayVisible = false;

  onOverlayTextClick() {
    this.isOverlayVisible = !this.isOverlayVisible;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key == 'Delete') {
      this.isOverlayVisible = !this.isOverlayVisible;
    }
  }
}
