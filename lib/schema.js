import { makeExecutableSchema } from 'graphql-tools';

const resolvers = require('./resolver').resolver;

const typeDefs =`
  type Cup {
    arg:   String
    art:   String
    block: Int
    id:    String
    ink:   String
    ire:   String
    lad:   String
    pip:   String
    ratio: Float
    tab:   Float
    time:  String
    tx:    String
  }

  type Query {
    cups: [Cup]
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
