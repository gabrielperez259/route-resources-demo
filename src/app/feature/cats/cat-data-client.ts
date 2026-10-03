import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';

@Service()

export class CatDataClient {
  private readonly apiUrl = 'https://cataas.com';
  private readonly apiTagsUrl = 'https://cataas.com/api/tags';

  tags = httpResource<string[]>( () => this.apiTagsUrl);

  async getCatSays(text: string): Promise<string> {
    const response = await fetch(`${this.apiUrl}/cat/says/${encodeURIComponent(text)}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }

  async getCatTagSays(tag: string, text: string): Promise<string> {
    const response = await fetch(
      `${this.apiUrl}/cat/${encodeURIComponent(tag)}/says/${encodeURIComponent(text)}`
    );
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }
}
 
   
 

