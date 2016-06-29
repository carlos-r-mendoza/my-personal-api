'use strict';
import { get } from './handlers/about/get';
import { post } from './handlers/about/post';
import { projects } from './handlers/projects';

const routes = [
  {
    method: 'GET',
    path: '/about',
    handler: get
  },
  {
    method: 'POST',
    path: '/about',
    handler: post
  },
  {
    method: 'GET',
    path: '/projects',
    handler: projects
  }
];

export { routes }