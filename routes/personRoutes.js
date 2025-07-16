const express = require('express');
const router = express.Router();

const Person = require('./../models/person.js');

router.post('/', async function (req, res) {
    
    try {
        const data = req.body;
        
        const newPerson = new Person(data);
        
        const savedPerson = await newPerson.save();
        console.log('Person saved successfully');
        res.status(200).json(savedPerson);
    } catch (error) {
        console.error("Error saving person:", error);
        res.status(500).send('Internal server error');
    }
});

router.get('/', async function (req, res) {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (error) {
        console.error("Error fetching people:", error);
        res.status(500).send('Internal server error');
    }
});


router.get('/:workType', async function (req, res) {
    try {
        const workType = req.params.workType  ;
        
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await Person.find({ work: workType });
            console.log("Response fetched successfully. ")
            res.status(200).json(response);
        } else {
            res.status(400).json('Invalid work type');
        }
    } catch (error) {
        console.error("Error fetching people by work type:", error);
        res.status(500).json('Internal server error');
    }
})

router.put('/:id', async function (req, res) {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, { 
            runValidators: true,
            new: true 
        });
        if (!response) {
            return res.status(404).json('Person not found');
        }

        console.log("Person updated successfully.");
        res.status(200).json(response);

    } catch (error) {
        console.error("Error updating person:", error);
        res.status(500).json('Internal server error');
    }
        
});

router.delete('/:id', async function (req, res) {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json('Person not found');
        }
        console.log("Person deleted successfully.");
        res.status(200).json(response);
    } catch (error) {
        console.error("Error deleting person:", error);
        res.status(500).json('Internal server error');
    }
});

module.exports = router;