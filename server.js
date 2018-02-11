require('dotenv').config()
const restify = require('restify');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql').graphql
const Schema = require('./schema');

const app = restify.createServer();

app.post('/', graphqlHTTP({
  schema: Schema,
  graphiql: false,
  pretty: true
}));

app.get('/', graphqlHTTP({
  schema: Schema,
  graphiql: true,
  pretty: true
}));

app.listen(process.env.PORT);
console.log(`Running a GraphQL API server at localhost:${process.env.PORT}`)
