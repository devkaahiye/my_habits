import Habits from "../models/habitsModels.js";

export const getHabits = async (req, res) => {
  try {
    const habits = await Habits.find();

    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getHabitById = async (req, res) => {
  try {
    const habit = await Habits.findById(req.params.id);
    if (habit) {
      res.status(200).json(habit);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createHabits = async (req, res) => {
  try {

    const { title, dateTime, description, done } = req.body;
    const newHabits = new Habits({
      title,
      dateTime: dateTime,
      description,
      done
    });
    const habit = await newHabits.save();
    res.status(200).json(habit);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateHabit = async(req, res)=>{
    try {
        const { title, date, description , done} = req.body;
        const habit = await Habits.findById(req.params.id);
        if (note) {
            habit.title=title;
            habit.date=date;
            habit.description= description
            habit.done = done

            const updatedhabit = await habit.save()
            res.status(200).json(updatedhabit);

        }else{
            res.status(404).json({ message: "Not Found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

export const  deleteHabit = async (req, res) => {
    try {
        const habit = await Habits.findByIdAndDelete(req.params.id);
        if (habit) {
            res.status(404).json({ message: "Deleted Successfully" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
