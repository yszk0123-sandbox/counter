import React from 'react';
import { Route } from '../../application/routing';

export const wordRoutes: Route[] = [
  {
    path: '/word',
    title: 'Word',
    async action(context) {
      const { WordPage } = await import('./components/WordPage');

      return {
        content: <WordPage />,
      };
    },
  },
];
