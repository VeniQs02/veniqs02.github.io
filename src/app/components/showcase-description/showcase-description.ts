import {Component, HostListener, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'showcase-description',
  imports: [
    TranslatePipe
  ],
  templateUrl: './showcase-description.html',
  styleUrl: './showcase-description.css',
})
export class ShowcaseDescription {
  @Input() selectedDescription = '';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key == '1') {
      this.selectedDescription = 'angular';
    }else if (event.key == '2') {
      this.selectedDescription = 'java';
    }else if (event.key == '3') {
      this.selectedDescription = 'android';
    }
  }
}
