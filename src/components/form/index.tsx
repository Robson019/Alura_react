import Button from "../button";
import style from './form.module.scss';
import React, {useState} from "react";
import {ITask} from "../../types/ITask";
import {v4 as uuidv4} from "uuid";

export default function Form({setTasks}: {setTasks:  React.Dispatch<React.SetStateAction<ITask[]>>}) {
    const [task, setTask] = useState({
        name: "",
        time: "00:00"
    })

    function createTask(e: React.FormEvent) {
        e.preventDefault();
        setTasks(tasks => [...tasks, {...task, selected: false, done: false, id: uuidv4()}])
        setTask({
            name: "",
            time: "00:00"
        })
    }

    return (
        <form className={style.novaTarefa} onSubmit={createTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task" >
                    Add a new task
                </label>
                <input type="text" name="task" id="task"
                       value={task.name} onChange={(e) => setTask({...task, name: e.target.value})}
                placeholder="What do you need to do?" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="timer" >
                    Timer
                </label>
                <input type="time" step="1" name="timer" id="timer"
                       value={task.time} onChange={(e) => setTask({...task, time: e.target.value})}
                       min="00:00:00" max="01:30:00" required />
            </div>
            <Button type="submit" text={'Add Task'} />
        </form>
    );
}