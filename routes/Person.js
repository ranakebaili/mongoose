const express = require ("express")
const person=require("../model/Person.js")
const router = express.Router()


router.get('/test',(req,res) =>{
    res.send('hello')
})

//add contact
router.post('./add',async (req,res)=>{
    try{
        const {name,age,favoriteFoods}=req.body
        const newPerson=new person ({name,age,favoriteFoods})
        await newPerson.save();
        res.status(200).send({msg:'person added', newPerson})
    } catch (error) {
        res.status(400).send({msg:'cant add person'})
    }
})




module.exports=router;