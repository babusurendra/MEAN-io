data = new Promise(resolve,reject){
  if(val ==10){
    resolve("value is 10");
  }
}
data().then((msg)=>{
 console.log(`promise resolved with ${msg}`);
});
import mongoose from 'mongoose';
import util from 'util';
// config should be imported before importing any other file
import config from './server/config/config';
import app from './server/config/express';
import { Promise } from 'core-js/library/web/timers';
import { resolve } from 'q';
import { reject } from './C:/Users/apple/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bluebird';


const debug = require('debug')('express-mongoose-es6-rest-api:index');
// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// print mongoose logs in dev env
if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}
// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912

  // listen on port config.port
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });

export default app;
