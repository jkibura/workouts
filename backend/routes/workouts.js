const router = require("express").Router()

const { getWorkouts,
        getWorkout,
        createWorkout,
        updateWorkout,
        deleteWorkout  
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get("/", getWorkouts)

router.get("/:id", getWorkout)

router.post('/', createWorkout)

router.patch('/:id', updateWorkout)

router.delete('/:id', deleteWorkout)

module.exports = router