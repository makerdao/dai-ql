const graphql = require('graphql');

var CUPs = [
  {
    id: "1",
    lad: "0x0"
  },
  {
    id: "2",
    lad: "0x1"
  }
]

const cupType = new graphql.GraphQLObjectType({
  name: 'Cup',
  fields: () => {
    return {
      id: { type: graphql.GraphQLString },
      lad: { type: graphql.GraphQLString }
    }
  }
});

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      cups: {
        type: new graphql.GraphQLList(cupType),
        resolve: () => {
          return CUPs;
        }
      }
    }
  }
});

module.exports = new graphql.GraphQLSchema ({
   query: queryType
});
