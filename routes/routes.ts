'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/about',
        handler: require('./handlers/about')
    },
    {
        method: 'GET',
        path: '/projects',
        handler: require('./handlers/projects')
    }
];