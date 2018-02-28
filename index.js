'use strict';

require('dotenv').config();

var express = require('express');
var postgraphile = require('postgraphile').postgraphile;
var FilterPlugin = require('postgraphile-plugin-connection-filter');

var app = express();
var options = {
  graphiql: true,
  graphqlRoute: '/',
  graphiqlRoute: '/console',
  appendPlugins: [FilterPlugin]
};

app.use(postgraphile(process.env.DATABASE_URL, 'public', options));

app.listen(process.env.PORT);
console.log('Running a GraphQL API server at localhost:' + process.env.PORT);
