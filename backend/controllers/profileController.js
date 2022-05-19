const asyncHandler = require('express-async-handler')

const Profile = require('../model/profileModel')
// @desc Get profiles
// @route GET /api/profiles
// @access Private
const getProfiles = asyncHandler(async (req, res) => {
    const profiles = await Profile.find()
    
    res.status(200).json(profiles)
})

// @desc Set profile
// @route POST /api/profiles
// @access Private
const setProfile = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const profile = await Profile.create({
        text: req.body.text,
    })

    res.status(200).json(profile)
})

// @desc Update profile
// @route PUT /api/profiles/:id
// @access Private
const updateProfile = asyncHandler(async (req, res) => {
    const profile = await Profile.findById(req.params.id)
    
    if(!profile) {
        res.status(400)
        throw new Error("Profile not found")
    }

    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedProfile)
})

// @desc Delete profile
// @route DELETE /api/profiles/:id
// @access Private
const deleteProfile = asyncHandler(async (req, res) => {
    const profile = await Profile.findById(req.params.id)
    
    if(!profile) {
        res.status(400)
        throw new Error("Profile not found")
    }

    await profile.remove()
    
    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getProfiles,
    setProfile,
    updateProfile,
    deleteProfile,
}