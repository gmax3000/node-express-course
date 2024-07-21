const express = require('express');
const router = express.Router();
const { addPerson, getPeople, getPersonById, updatePerson, deletePerson } = require('../controllers/people');

// Define a GET route for the URL /
router.get('/', getPeople);

// Define a POST route for the URL /
router.post('/', addPerson);

// Define a GET route for retrieving a person by ID
router.get('/:id', getPersonById);

// Define a PUT route for updating a person by ID
router.put('/:id', updatePerson);

// Define a DELETE route for deleting a person by ID
router.delete('/:id', deletePerson);

module.exports = router;
