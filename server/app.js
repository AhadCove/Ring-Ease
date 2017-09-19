import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';


// ES6 promises
mongoose.Promise = Promise;

const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/ring-ease";
// mongodb connection
mongoose.connect(mongoUrl, {
  useMongoClient: true,
  promiseLibrary: global.Promise
});
var db = mongoose.connection;

// mongodb error
db.on('error', console.error.bind(console, 'connection error:'));

// mongodb connection open
db.once('open', () => {
  console.log(`Connected to Mongo at: ${new Date()}`)
});

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Middleware
app.use(cors())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api', routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

export default app;