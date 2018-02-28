require('dotenv').config()

const express = require('express');
const { postgraphile } = require('postgraphile');
const FilterPlugin = require('postgraphile-plugin-connection-filter');

const app = express()
const options = {
  graphiql: true,
  graphqlRoute: '/',
  graphiqlRoute: '/console',
  appendPlugins: [FilterPlugin]
}

app.use(postgraphile(process.env.DATABASE_URL, 'public', options))

app.listen(process.env.PORT);
console.log(`Running a GraphQL API server at localhost:${process.env.PORT}`)
