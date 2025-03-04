const Next = require('./core/Next');
const Strapi = require('./core/Strapi');
const Graphql = require('./core/Graphql');

const next = new Next();
next.start();

const strapi = new Strapi();
strapi.start();

const graphql = new Graphql();
graphql.startGenerate();