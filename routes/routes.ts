'use strict';
import { about } from './handlers/about'
import { projects } from './handlers/projects'

const routes = [
  {
    method: 'GET',
    path: '/about',
    handler: about
  },
  {
    method: 'GET',
    path: '/projects',
    handler: projects
  }
];

export { routes }