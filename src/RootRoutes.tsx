import React from 'react';
import { NotFoundPage } from './app/components/NotFoundPage';
import { Route } from './app/routing/routing-type';
import { counterRoutes } from './pages/counter';
import { helloRoutes } from './pages/hello';
import { loginRoutes } from './pages/login';
import { noteRoutes } from './pages/note';
import { wordRoutes } from './pages/word';

export const appRoutes: Array<Route> = [
  ...counterRoutes,
  ...helloRoutes,
  ...loginRoutes,
  ...noteRoutes,
  ...wordRoutes,
  {
    path: '(.*)',
    action(context) {
      return { content: <NotFoundPage /> };
    },
  },
];
