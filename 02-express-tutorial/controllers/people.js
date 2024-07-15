const { people } = require('../data');

// Function to get all people
const getPeople = (req, res) => {
    res.json(people);
};

// Function to add a new person
const addPerson = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }

    const newPerson = {
        id: people.length + 1,
        name
    };

    people.push(newPerson);
    res.status(201).json({ success: true, name });
};

// Function to get a person by ID
const getPersonById = (req, res) => {
    const id = parseInt(req.params.id);
    const person = people.find((p) => p.id === id);

    if (person) {
        res.json(person);
    } else {
        res.status(404).json({ message: 'Person not found' });
    }
};

// Function to update a person by ID
const updatePerson = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    const person = people.find((p) => p.id === id);

    if (person) {
        person.name = name;
        res.json({ success: true, person });
    } else {
        res.status(404).json({ message: 'Person not found' });
    }
};

// Function to delete a person by ID
const deletePerson = (req, res) => {
    const id = parseInt(req.params.id);
    const index = people.findIndex((p) => p.id === id);

    if (index !== -1) {
        people.splice(index, 1);
        res.json({ success: true, message: `Person with ID ${id} deleted` });
    } else {
        res.status(404).json({ message: 'Person not found' });
    }
};

module.exports = { addPerson, getPeople, getPersonById, updatePerson, deletePerson };
