import { Routes, nonBlocking } from '@angular/router';
import { inject, resource } from '@angular/core';
import { CatSearch } from './feature/cats/cat-search/cat-search';
import { CatResults } from './feature/cats/cat-results/cat-results';
import { CatDataClient } from './feature/cats/cat-data-client';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full',
  },
  {
    path: 'cats',
    component: CatSearch,
  },
  {
    path: 'cats/:text',
    component: CatResults,
    resources: (ctx) => {
      const dataClient = inject(CatDataClient);     

      return {
        
        catImage: nonBlocking(
          resource({
            // Acesse o parâmetro direto via ctx.params Signal
            params: () => ctx.params()['text'],
            loader: ({ params: text }) => dataClient.getCatSays(text),
          })
        ),
      };
    },
  },{
    path: 'cats/:tag/:text',
    component: CatResults,
    resources: (ctx) => {
      const dataClient = inject(CatDataClient);

      return {
        catImage: nonBlocking(
          resource({
            params: () => ({
              tag: ctx.params()['tag'],
              text: ctx.params()['text'],
            }),
            loader: ({ params }) => dataClient.getCatTagSays(params.tag, params.text),
          })
        ),
      };
    },
  },
];
