import {db,sql} from './db';

exports.resolverMap = {
  Query: {
    cups: (obj, args, ctx) => db.any(sql('selectCups')),
    cup: (obj, args, ctx) => db.one(sql('findCup'), args)
  },
  Cup: {
    actions(cup) {
      return db.any(sql('selectActions'), cup)
    }
  }

};
