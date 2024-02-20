// Importing required modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { getEnvelope } = require('./controller/envelopes');
const { envelopes } = require('./models/envelope');
const { deleteEnvelope } = require('./controller/envelopes');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(morgan('dev'));
app.use(bodyParser.json());

// Test Route from server
app.get('/', (req, res, next) => {
    res.send('Hello from the server!');
});

// Route to retrieve all envelopes data
app.get('/envelopes', (req, res, next) => {
    res.json(envelopes);
});

// Route to retrieve envelope data by ID
app.get('/envelopes/:id', (req, res, next) => {
    const { id } = req.params;
    const envelope = getEnvelope(id, envelopes);
    if (envelope.error) {
      return res.status(404).json(envelope);
    }
    res.json(envelope);
    next();
  });


// Route to update envelope budget

app.put('/envelopes/:id', (req, res, next) => {
    const { id } = req.params;
    const { budget } = req.body;
    const envelope = getEnvelope(id, envelopes);
    if (envelope) {
        envelope.budget = budget;
        return res.sendStatus(200);
    }
    res.status(404).json({ error: 'Envelope not found' });
    totalBudget -= envelope.budget - budget;
    next();

  });


// Route to delete an envelope
app.delete('/envelopes/:id', (req, res, next) => {
    const { id } = req.params;
    const deleted = deleteEnvelope(id, envelopes);

    if (deleted) {
        return res.sendStatus(200).send('Envelope deleted!');
      } else {
        res.status(404).send('Envelope not found');
      }
    next();
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
