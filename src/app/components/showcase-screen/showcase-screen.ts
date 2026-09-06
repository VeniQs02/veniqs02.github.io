import {Component} from '@angular/core';
import {ShowcaseDescription} from '../showcase-description/showcase-description';

@Component({
  selector: 'showcase-screen',
  imports: [
    ShowcaseDescription
  ],
  templateUrl: './showcase-screen.html',
  styleUrl: './showcase-screen.css',
})
export class ShowcaseScreen {
  protected selectedDescription = '';

  showDescription(name: string) {
    this.selectedDescription = name;
  }
}
