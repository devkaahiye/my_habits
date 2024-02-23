import express  from "express";
import { createHabits, getHabits, getHabitById, updateHabit, deleteHabit,  } from "../controllers/habitsControllers.js";

const routes= express.Router()

routes.route('/').get(getHabits).post(createHabits)
routes.route('/:id').get(getHabitById).put(updateHabit).delete(deleteHabit)

export default routes