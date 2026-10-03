import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-cat-text',
  styleUrl: './cat-text.scss',
  templateUrl: './cat-text.html',
})
export class CatText {
  text = signal<string>('');

  // Emite a string digitada quando o formulário é submetido
  searchSubmitted = output<string>();

  search(): void {
    const value = this.text().trim();
    if (value) {
      this.searchSubmitted.emit(value);
    }
  }
}
