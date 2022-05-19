const express = require('express')
const router = express.Router()
const { getProfiles,
        setProfile,
        updateProfile,
        deleteProfile
    } = require('../controllers/profileController')

router.route('/').get(getProfiles).post(setProfile)
router.route('/:id').put(updateProfile).delete(deleteProfile)

module.exports = router
