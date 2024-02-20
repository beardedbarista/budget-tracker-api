const { envelopes } = require('../models/envelope');

// Function to create a new envelope
const createEnvelope = (req, res, next) => {
    const envelope = req.body;
    envelope.id = envelopes.length + 1;
    envelopes.push(envelope);
    res.status(201).json(envelope);
    next();
};

// Function to GET envelope by ID

const getEnvelope = (id, envelopes) => {
    const envelope = envelopes.find(e => e.id === parseInt(id));
    if (!envelope) {
      return { error: 'Envelope not found' }; 
    }
  
    return envelope;
  }

// Function to DELETE envelope by ID

const deleteEnvelope = (id) => {
    const index = envelopes.findIndex(env => env.id === parseInt(id));
  
    if (index !== -1) {
      return envelopes.splice(index, 1); 
    }
  
    return null;
  }
  
module.exports = {
    createEnvelope,
    getEnvelope,
    deleteEnvelope
};
