// app_api/models/db.js
const mongoose = require('mongoose');
const readLine = require('readline');

const host  = process.env.DB_HOST || '127.0.0.1';
const dbURI = process.env.MONGODB_URI || process.env.DB_URI || `mongodb://${host}/travlr`;

const connect = () => {
  setTimeout(() => {
    mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }, 500);
};

// CONNECTION EVENTS
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// GRACEFUL SHUTDOWN
const gracefulShutdown = (msg) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
  });
};

// For nodemon restarts
if (process.platform === 'win32') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('SIGINT', () => {
    process.emit('SIGINT');
  });
}

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart');
  process.kill(process.pid, 'SIGUSR2');
});
process.on('SIGINT', () => {
  gracefulShutdown('app termination (SIGINT)');
  process.exit(0);
});
process.on('SIGTERM', () => {
  gracefulShutdown('app termination (SIGTERM)');
  process.exit(0);
});

// CONNECT AND LOAD SCHEMA
connect();
require('./travlr'); // Load the schema file that registers the "trips" model

module.exports = mongoose;
