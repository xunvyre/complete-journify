const router = require('express').Router();
const User = require('../models/User');

//get all users (dev only)
router.get('/', (req, res) =>
{
    User.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err =>
    {
        console.log(err);
        res.status(500).json(err);
    })
});

//get single user
router.get('/:id', async (req, res) =>
{
    try
    {
        const user = await User.findById(req.params.id);
        const {password, __v, ...other} = user._doc;
        res.status(200).json(other);
    }
    catch (err)
    {
        res.status(500).json(err);
    };
});

//update
router.put('/:id', async (req, res) =>
{
    if(req.body.userId === req.params.id)
    {
        console.log("Coming soon.")
    }
    else
    {
        return res.status(403).json("Permission to update this account denied.")
    }
});

//delete
router.delete('/:id', async (req, res) =>
{
    if(req.body.userId === req.params.id)
    {
        console.log("Coming soon.")
    }
    else
    {
        return res.status(403).json("Permission to delete this account denied.")
    }
});


module.exports = router;