// app_server/models/db.js
const mongoose = require('mongoose');
const readLine = require('readline');

// Build the connection string (local MongoDB)
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

// Connect with a small delay (as shown in the guide)
const connect = () => {
  setTimeout(() => mongoose.connect(dbURI, { }), 1000);
};

// Connection event logging
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Windows-specific SIGINT handler
if (process.platform === 'win32') {
  const r1 = readLine.createInterface({ input: process.stdin, output: process.stdout });
  r1.on('SIGINT', () => { process.emit('SIGINT'); });
}

// Graceful shutdown helper
const gracefulShutdown = (msg) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
  });
};

// Nodemon restart
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart');
  process.kill(process.pid, 'SIGUSR2');
});

// App termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination');
  process.exit(0);
});

// Container termination
process.on('SIGTERM', () => {
  gracefulShutdown('app shutdown');
  process.exit(0);
});

// Make initial connection & load model
connect();
require('./travlr');

module.exports = mongoose;
