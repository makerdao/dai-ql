require('dotenv').config()

const express = require('express');
const postgraphql = require('postgraphql').postgraphql;

const app = express()
const options = {
  graphiql: true,
  graphqlRoute: '/graphql',
  graphiqlRoute: '/'
}

app.use(postgraphql(process.env.PG_URL, 'public', options))

app.listen(process.env.PORT);
console.log(`Running a GraphQL API server at localhost:${process.env.PORT}`)
