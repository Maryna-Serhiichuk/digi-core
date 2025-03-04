const Query = require('./core/Query');
const Graphql = require('./core/Graphql');

const query = new Query();
query.startGenerateQuery();

const graphql = new Graphql();
graphql.generate();

