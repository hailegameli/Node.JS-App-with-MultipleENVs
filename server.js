'use strict';

const express = require('express');

const app = express();

// Environment variables with defaults
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const NODE_ENV = process.env.NODE_ENV || 'development';
const APP_NAME = process.env.APP_NAME || 'Hello World Africa';
const API_URL = process.env.API_URL || 'http://localhost:5000';

// Same application, different environment configuration
app.get('/', (req, res) => {
  res.send(`
    <h1>${APP_NAME}</h1>
    <p>Environment: ${NODE_ENV}</p>
    <p>API URL: ${API_URL}</p>
    <p>Port: ${PORT}</p>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    environment: NODE_ENV
  });
});

app.listen(PORT, HOST, () => {
  console.log(`${APP_NAME} running in ${NODE_ENV}`);
  console.log(`Listening on http://${HOST}:${PORT}`);
});
