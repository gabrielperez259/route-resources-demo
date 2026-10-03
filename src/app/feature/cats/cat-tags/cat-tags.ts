import { Component, inject, output, signal } from '@angular/core';
import { CatDataClient } from '../cat-data-client';

@Component({
  imports: [],
  selector: 'app-cat-tags',
  styleUrl: './cat-tags.scss',
  templateUrl: './cat-tags.html',
})
export class CatTags {

tags = inject(CatDataClient).tags;

  // Signal local para manter a tag selecionada
  selectedTag = signal<string>('');

  // Output usando a API moderna baseada em Signal/RxJS do Angular
  tagSelected = output<string>();

  // Método chamado ao mudar a seleção
  onTagChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedTag.set(value);
    this.tagSelected.emit(value);
  }
}
