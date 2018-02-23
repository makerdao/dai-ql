import {db,sql} from './db';

exports.resolver = {
  Query: {
    cups: (obj, args, ctx) => db.any(sql('selectCups'))
  }
};
