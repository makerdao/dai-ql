import { makeExecutableSchema } from 'graphql-tools';

const resolvers = require('./resolver').resolverMap;

const typeDefs =`
  type Cup {
    """
    Data associated with the act
    """
    arg: String
    """
    Action name
    """
    act: String
    """
    Outanding debt
    """
    art: Float
    """
    Block number
    """
    block: Int
    """
    Cup Id
    """
    id: Int
    """
    Locked collateral
    """
    ink: Float
    """
    Outstanding debt including fee
    """
    ire: Float
    """
    Cup owner
    """
    lad: String
    """
    USD/ETH
    """
    pip: Float
    """
    Collateralization ratio
    """
    ratio: Float
    """
    USD value of collateral
    """
    tab: Float
    """
    Block timestamp
    """
    time: String
    """
    Transaction hash
    """
    tx: String
    actions: [Cup]
  }

  type Query {
    cups(orderBy: OrderBy): [Cup]
    cup(id: Int): Cup
  }
  enum OrderBy {
    ID_DESC
    ID_ASC
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
