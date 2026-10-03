import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CatTags } from '../cat-tags/cat-tags';
import { CatDataClient } from '../cat-data-client';
import { CatText } from '../cat-text/cat-text';

@Component({
  imports: [FormsModule, CatTags, CatText],
  selector: 'app-cat-search',
  styleUrl: './cat-search.scss',
  templateUrl: './cat-search.html',
  
})
export class CatSearch {
  private readonly router = inject(Router);

  // Armazena a tag selecionada emitida pelo <app-cat-tags>
  selectedTag = signal<string>('');

  onTagSelected(tag: string): void {
    this.selectedTag.set(tag);
  }

  // Recebe o texto emitido pelo <app-cat-text-form> e navega
  onSearch(text: string): void {
    const tag = this.selectedTag();

    if (tag) {
      this.router.navigate(['/cats', tag, text]);
    } else {
      this.router.navigate(['/cats', text]);
    }
  }
}
