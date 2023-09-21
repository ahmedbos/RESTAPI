const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require ('mongoose')

app.use(express.json())

mongoose.connect('mongodb+srv://amdbs:<409d|L|cxW8LiCBj>@cluster0.e8r7s9i.mongodb.net/mongoose-cp?retryWrites=true&w=majority')
.then(()=> console.log("database connescted"))
.catch((err)=> {if (err)throw err})
app.listen(PORT , ()=>console.log ("listening on port", PORT))


// @ Description : GET all users 
router.post('/users', async(req, res)=> {
    try{
        const newUser = await User.find()
        res.status(200).json({msg:"success", newUser});
    } catch (err){res.status(500).json({msg: err.message})}
})
//@ Description : POST METHOD
router.post('/users', async(req, res)=> {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({msg:"success", newUser});
    } catch (err){res.status(500).json({msg: err.message})}
})

// @ Description : PUT METHOD
router.post('/users', async(req, res)=> {
    try{
        const newUser = await User.findByIdandUpdate({_id: req.params.id}, {...req.body})
        if (!newUser) return res.status(404).json({msg:"contact not found"})
        res.status(200).json({msg:"success", newUser: {...newUser. _doc , ...req.body}});
    } catch (err){res.status(500).json({msg: err.message})}
})
// @ Description : DELETE METHOD
router.post('/users', async(req, res)=> {
    try{
        const newUser = await User.findByIdandDelete( req.params.id)
        if (!newUser) return res.status(404).json({msg:"contact not found"})
        res.status(200).json({msg:"success", newUser});
    } catch (err){res.status(500).json({msg: err.message})}
})


//app.use('/api ', require('/routes/contactRoutes'))