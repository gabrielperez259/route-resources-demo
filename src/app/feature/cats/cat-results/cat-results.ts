import { Component, input, Resource } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cat-results',
  styleUrl: './cat-results.scss',
  templateUrl: './cat-results.html',
})
export class CatResults {
  readonly text = input.required<string>();

  readonly catImage = input.required<Resource<string>>();
}
