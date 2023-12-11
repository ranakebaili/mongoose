const express = require("express");
const person = require("../model/Person.js");
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('hello');
});

//add
router.post('/add', async (req, res) => {
    try {
        const { name, age, favoriteFoods } = req.body;
        const newPerson = new person({ name, age, favoriteFoods });
        await newPerson.save();
        res.status(200).send({ msg: 'person added', newPerson });
    } catch (error) {
        res.status(400).send({ msg: 'cant add person' });
    }
});

//find by name
router.post('/findByName', async (req, res) => {
    try {
        const { nameToFind } = req.body;
        const peopleToFind = await person.find({ name: nameToFind });
        res.status(200).send({ msg: 'People found', foundPeople: peopleToFind });
    } catch (error) {
        res.status(500).send({ msg: 'people not found', error: error.message });
    }
});

//find one by favourite food
router.post('/findByFood', async (req, res) => {
    try {
        const { foodToFind } = req.body;
        const personToFind = await person.findOne({ favoriteFoods: foodToFind });
        res.status(200).send({ msg: 'Person found', foundPerson: personToFind });
    } catch (error) {
        res.status(500).send({ msg: 'person not found', error: error.message });
    }
});

//delete
router.delete('/delete/:_id', async (req, res) => {
    try {
        const personToDelete = await person.findByIdAndDelete(req.params._id);
        res.status(200).send({ msg: 'Person deleted', deletedPerson: personToDelete });
    } catch (error) {
        res.status(400).send({ msg: 'cant delete person' });
    }
});

//edit
router.put('/update/:_id', async (req, res) => {
    try {
        const {_id}=req.params ;
        const personToUpdate=await person.findByIdAndUpdate({_id}, { ...req.body }, { new: true })
        res.status(200).send({ msg: 'Person updated', updatedPerson: personToUpdate });
    } catch (error) {
        res.status(400).send({ msg: 'cant update person' });
    }
});

//find one by id
router.get('/find/:_id', async (req, res) => {
    try {
        const personToFind = await person.findById(req.params._id);
        res.status(200).send({ msg: 'Person found', foundPerson: personToFind });
    } catch (error) {
        res.status(400).send({ msg: 'cant find person' });
    }
});

//show all
router.get('/show', async (req, res) => {
    try {
        const peopleToShow = await person.find();;
        res.status(200).send({ msg: 'people shown', shownPeople: peopleToShow });
    } catch (error) {
        res.status(400).send({ msg: 'cant show people' });
    }
});


module.exports = router;
